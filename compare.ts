'use strict';


let dotenv = require('dotenv').config();

import express from 'express';

const app = express();

const PORT = process.env.PORT;

app.use(express.static('./public'));

app.get('/data', (req, res)=> {
  let airplane = {
    departure : Date.now(),
    canFly : true,
    pilot : 'good'
  }
  res.status(200).json(airplane);
})

app.get('/hello', (request, response)=>{
  response.status(200).send('hi')
})

// app.get('/sup', ())

