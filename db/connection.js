console.log('database goes here')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOLAB_CRIMSON_URI || 'mongodb://localhost/authors')

const AuthorSchema = new mongoose.Schema({
  name: String,
  publisher: String,
  age: Number,
  active: Boolean
})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = mongoose
