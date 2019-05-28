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
  await res.send(players);
});

app.post('/players', async(req, res) => {
  console.log(req.body);
  let player = req.body;
  db.insertPlayer(player);
  await res.send('Done');
});

module.exports = app;