console.log('database goes here')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOLAB_CRIMSON_URI || 'mongodb://localhost/authors')

module.exports = mongoose
