const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('./config/keys');
const Schema = require('./models/user');

const GOOGLE_CLIENT_ID = keys.google.clientID;

const GOOGLE_CLIENT_SECRET = keys.google.clientSecret;

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/redirect",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  console.log(profile);
  Schema.findOne({googleId: profile.id}).then(existingUser => {
    if (existingUser) {
        done(null, existingUser);
    } else {
        new Schema({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.email,
          isEmailVerified: profile.email_verified,
          language: profile.language,
          pictureUrl: profile.picture
        }).save().then(user => done(null, user));
        console.log("Data Saved");
    }
});
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
