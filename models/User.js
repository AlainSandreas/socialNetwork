const mongoose = require('mongoose');
const uuidv1 = require('uuid');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  salt: String,
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date
});

// Virtual Fields
UserSchema.virtual('password')
  .set((password) => {
    this._password = password; // create temporary pasword
    this.salt = uuidv1(); // generate timestamp
    this.hashed_password = this.encryptedPassword(password);
  })
  .get(() => {
    return this._password;
  });

  UserSchema.methods = {
    encryptPassword: (password) => {
      if(!password) return "";
      try {
        return crypto.createHmac('sha1', this.salt)
          .update(password)
          .digest('hex');
      } catch(err) {
        return "";
      }
    }
  }

module.exports = User = mongoose.model('User', UserSchema);