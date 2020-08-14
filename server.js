'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

// app.get('/hello', (request, response) => {
//   response.status(200).send('Hello');
// });

// app.get('/data', (request, response) => {
//   let airplanes = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well Trained',
//   };
//   response.status(200).json(airplanes);
// });

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

/* THINGS WE DON'T NEED:
lines 11-22 (These were test paths)
we need everything else
- We do not index.html file because we have one in our PORTFOLIO
- ALL WE NEED TO DO:
- Find where portfolio lives on machine and drag and drop entire folder and make sure everything ended up at the root of public*/

