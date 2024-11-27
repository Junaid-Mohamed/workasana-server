const mongoose = require('mongoose');
// User Schema
const userSchema = new mongoose.Schema({
 name: { type: String, required: true }, // User's name
 email: { type: String, required: true, unique: true } // Email must be unique
});
module.exports = mongoose.model('User', userSchema);