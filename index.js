const express = require('express')
const parser = require('body-parser')

const Author = require('./db/connection.js')

const app = express()

app.set('port', process.env.PORT || 4000)
app.use(parser.json({extended: true}))

app.get('/authors', (req, res) => {
  Author.find({}, null).then((authors) => {
    res.json(authors)
  })
})

app.post('/authors', (req, res) => {
  Author.create(req.body).then((author) => {
    res.status(200).json(author)
  })
})

app.get('/authors/:id', (req, res) => {
  Author.findOne({ _id: req.params.id }).then((author) => {
    res.json(author)
  })
})

app.put('/authors/:id', (req, res) => {
  Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then((author) => {
    res.status(200).json(author)
  })
})

app.delete('/authors/:id', (req, res) => {
  Author.findOneAndRemove({_id: req.params.id}).then((author) => {
    res.status(200).send('author deleted')
  })
})

app.listen(app.get('port'), () => {
  console.log(`Connected on port ${app.get('port')}`)
})

module.exports = app
