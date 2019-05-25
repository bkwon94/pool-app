const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: String,
  image: String,
  place: Number,
  wins: Number
});

const Player = mongoose.model('Player', PlayerSchema);

export default Player;