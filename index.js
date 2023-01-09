const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes/produit.routes')
mongoose
.connect('mongodb+srv://kdija:kadi26@cluster0.wvdwois.mongodb.net/Produit?retryWrites=true&w=majority')
.then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  )

app.use('/api', api)

app.listen(3001)