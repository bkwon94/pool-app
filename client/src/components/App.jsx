import React from 'react';
import { useState, useEffect } from 'react';
import ChooseOption from './ChooseOption.jsx';
import Leaderboard from './Leaderboard.jsx';
import CurrentPlayer from './CurrentPlayer.jsx';

const App = () => {

  const [players, setPlayers] = useState(null);
  const [current, setCurrent] = useState(null);
  const [playerAdded, setPlayerAdded] = useState(false);

  // Fetch the sample data stored in database on component mount
  // If a player is created, fetch players again and re render to include new player
  useEffect(() => {
    fetch('/players')
      .then(res => res.json())
      .then(result => {
        setPlayers(result);
      })
      .catch(err => console.log(err))
  }, [playerAdded]);


  // When player is clicked, set current player info accordingly
  const handlePlayerChange = (player, place) => {
      let newCurrentPlayer = {
        name: player.name,
        place: place,
        image: player.image,
        wins: player.wins
      }
      console.log(newCurrentPlayer);
      setCurrent(newCurrentPlayer);
  }

  // Display loading message if the players data has not been fetched yet, otherwise display app with data fetched
  if (!players) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="app-container">
        <CurrentPlayer current={current} players={players}/>
        <ChooseOption setPlayerAdded={setPlayerAdded} playerAdded={playerAdded} players={players}/>
        <Leaderboard players={players} playerClick={handlePlayerChange}/>
      </div>
    )
  }

}

export default App;