/*jshint esversion:6*/

const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

//routers
const weatherRouter = require('./routers/weather.router');
server.use(weatherRouter);
// dummy router
server.get('/', (request, response) => {
  response.send('works');
});

server.listen(port, () => {
  console.log('Now listening on port: ', port);
});
