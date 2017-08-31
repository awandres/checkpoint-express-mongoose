const mongoose = require('./connection.js')
const Author = require('./schema.js')
const authorData = require('./seeds.json')

Author.remove({}).then(function(){
  authorData.forEach(function(author) {
    Author.create({
      name: author.name,
      publisher: author.publisher,
      age: author.age,
      active: author.active
    })
      .then((newPost) => {
        console.log(newPost)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  .then(() => {
    process.exit()
  })
})
