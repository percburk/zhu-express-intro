// give us express - don't use ./  !!
const { response } = require('express');
const express = require('express');

// call express function, create a server, save in app
const app = express();
const PORT = 5000;

// this code will serve static files - HTML, CSS, JavaScript, etc
app.use(express.static('server/public'));

// this code will serve data
const people = ['Gabin', 'Josh', 'Joe'];

// this is a get route
app.get('/data', (req, res) => {
  console.log('You got to /data! Nice job yo!');
  // all server requests (req) need a response (res)!
  res.send(people);
});

// start server!
app.listen(PORT, () => {
  // this will run when the server starts
  console.log('Server running on PORT', PORT);
});
