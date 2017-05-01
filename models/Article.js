// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var ArticleSchema = new Schema({
  // Just a string
  title: {
    type: String
  },
  // Just a string
  date: {
    type: Date
  },
    // Just a string
  url: {
    type: String
  },

});

var Article = mongoose.model("Article", ArticleSchema);

// Export the Note model
module.exports = Article;
