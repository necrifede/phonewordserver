'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const phonenumber = require('./phonewords')
const app = express()

// TODO: Enable All CORS Requests, This is not good, control with CORS options
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/phonenumber', (req, res) => {
  try {
    if(!req.query.value) {
      return res.status(400).send({ message: 'value is required!'})  
    }
    if(isNaN(req.query.value)) {
      return res.status(400).send({ message: `Invalid value '${req.query.value}'`})  
    }

    return res.status(200).send({ result: phonenumber(Number(req.query.value))})
  } catch (error) {
    return res.status(500).send({ message: `Evaluating '${req.query.value}' has error: ${error}`})
  }
})

app.listen(config.port, () => {
  console.log(`Running server in port ${config.port}`) // eslint-disable-line no-console
})
