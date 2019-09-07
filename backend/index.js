import db from './lib/db';
import './lib/cron';

const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');

// Enpoints
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

// Add subscriber
app.post(`/subscribe`, async (req, res) => {
  const { email, movies, theater, isTest = false } = req.body;
  const collection = db.get('subscriptions');
  movies
    .map(movie => ({
      date: Date.now(),
      notified: false,
      email,
      movie,
      theater,
      isTest,
    }))
    .forEach(subscription => {
      collection.push(subscription).write();
    });

  res.status(201).json({ success: true });
});

const port = process.env.PORT || 2345;
app.listen(port, function() {
  console.log('app listening on port: ', port);
});

export default app;
