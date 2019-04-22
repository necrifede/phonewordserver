'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/phonenumber', (req, res) => {
  return res.status(200).send({ message: 'working...'})
})

app.listen(config.port, () => {
  console.log(`Running server in port ${config.port}`) // eslint-disable-line no-console
})
