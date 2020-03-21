const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const cors           = require('cors');

const bodyParser     = require('body-parser');
const db             = require('./app/config/db');
const app            = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('Server starts on ' + port);
  });               
})
