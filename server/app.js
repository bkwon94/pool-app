const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/players', async(req, res) => {
  let players = await db.getPlayers();
  console.log('players:', players);
  await res.send(players);
});

module.exports = app;