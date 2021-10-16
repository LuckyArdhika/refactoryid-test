const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth');
const dbdata = require('./config/keys');
const mongoose = require('mongoose');
const usersSchema = require('./models/user');

mongoose.Promise = global.Promise;
mongoose.connect(dbdata.mongodb.dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!')
}).catch(err => {
    console.log('Could not connect to database : ' + err)
  })

const app = express();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.set('view engine','ejs');
app.use(session({ secret: dbdata.session.cookieKey, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// oauth configuration for mongodb


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/auth/google/redirect',
  passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  })
);

app.get('/protected', isLoggedIn, (req, res) => {
  
  // studentSchema.create(req.user, (error, data) => {
  //   if (error) {
  //     console.log(error)
  //     return next(error)
  //   } else {
  //     console.log(data)
  //     res.render('user', {title: 'Dashboard', name: req.user.displayName});
  //     // res.send(`Hello ${req.user.displayName}`);
  //   }
  // })
  console.log(req.user);
  res.render('user', {title: 'Dashboard', name: req.user.name, userData: JSON.stringify(req.user), userDataObj: req.user});
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

const port = 3000;
app.listen(port, () => console.log('listening on port: '+port));
