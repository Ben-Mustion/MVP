const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var beerData = require('../database/index');

const Beers = require('../database/Beers');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/beers', (req, res) => {
  beerData.selectAll((err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(data);
    }
  });
});



app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});