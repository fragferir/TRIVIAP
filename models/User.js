const mongoose = require('mongoose');
// modelo del usuario para el login con schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  role: { type: String, default: 'user' }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
