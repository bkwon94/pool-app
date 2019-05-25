const mongoose = require('mongoose');
const dbURI ='mongodb://localhost:27017/pool';
import User from './schema.js';

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to bspn');
});