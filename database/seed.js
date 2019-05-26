const faker = require('faker');
const insertPlayer = require('./index.js').insertPlayer;

// GENERATE/SEED DATA
const createAndSeedSamplePlayers = () => {
  for (let i = 1; i <= 15; i++) {
    let player = ({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      image: faker.image.avatar(),
      place: i,
      wins: faker.random.number({ 'min': 0, 'max': 50 })
    });
    insertPlayer(player);
  }
}

createAndSeedSamplePlayers();