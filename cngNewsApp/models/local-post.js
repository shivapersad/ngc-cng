var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var localPostSchema = new Schema({
  dateTimePosted: String,
  title: String,
  content: String,
  live: String,
  username: String
}, {
  collection: 'local_posts'
});

module.exports = mongoose.model('local_posts', localPostSchema);
