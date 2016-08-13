var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: String,
    password: String
}, {
    collection: 'users'
});

module.exports = mongoose.model('users', User);