const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  googleId: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  isEmailVerified: {
    type: Boolean
  },
  language: {
    type: String
  },
  pictureUrl: {
    type: String
  },
}, {
    collection: 'users'
  })

module.exports = mongoose.model('users', usersSchema)
