// Load express
const express = require('express');

const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send(`
  <h1>99 bottles of beer on the wall</h1>
  <a href = '/98'>take one down, pass it around</a>
  `);

});

app.get('/:number_of_bottles', function (req, res) {
    (req.params.number_of_bottles > 0) ?
    res.send(`
    <h1>${req.params.number_of_bottles} bottles of beer on the wall</h1>
    <a href = '/${req.params.number_of_bottles - 1}'>take one down, pass it around</a>
    `) :
    res.send(`
    <h1>${req.params.number_of_bottles} bottles of beer on the wall</h1>
    <a href = '/99'>start over</a>
    `);
  });
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});