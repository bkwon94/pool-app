const mongoose = require('mongoose');
const dbURI ='mongodb://localhost:27017/pool';
const Player = require('./schema.js');

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to pool');
});

/* DATABASE HELPER FUNCTIONS */

// INSERT NEW PLAYER
const insertPlayer = async (newPlayer) => {
  const player = new Player(newPlayer);
  await player.save(err => {
    if (err) {
      throw err;
    } else {
      console.log('saved');
    }
  });
};

module.exports = {
  insertPlayer: insertPlayer
}