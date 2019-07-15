
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ' ',
    required: true
  },
  email: {
    type: String,
    default: ' ',
    required: true
  },
  password: {
    type: String,
    default: ' ',
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bycrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;