var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  link: {
    type: String,
    required: true
  }
});

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;
