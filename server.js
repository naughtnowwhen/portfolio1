'use strict';





let dotenv = require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.use(express.static('./public'));

app.get('/hello', (request, response)=>{
  response.status(200).send('hi')
})


app.get('/data', (req, res)=> {
  let airplane = {
    departure : Date.now(),
    canFly : true,
    pilot : 'good'
  }
  res.status(200).json(airplane);
})

app.use('*', (req, res) => {
  res.send('it doesnt exist');
})

app.listen(PORT, ()=>{
  console.log(`listening on PORT : ${PORT}`);
})

app.listen()