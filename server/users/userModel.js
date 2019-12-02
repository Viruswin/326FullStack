var mongoose = require('mongoose');

// Schema definition for user model
// Additional information can be added
var UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);