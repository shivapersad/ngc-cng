var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var internationalPostSchema = new Schema({
  dateTimePosted: String,
  title: String,
  url: String,
  live: String,
  username: String
}, {
  collection: 'international_posts'
});

module.exports = mongoose.model('international_posts', internationalPostSchema);