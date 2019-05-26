import React from 'react';
import { useState, useEffect } from 'react';
import ChooseWinner from './ChooseWinner.jsx';
import Leaderboard from './Leaderboard.jsx';
import CurrentPlayer from './CurrentPlayer.jsx';

const App = () => {

  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetch('/players')
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setPlayers(result);
      })
      .catch(err => console.log(err))
  }, []);

  if (!players) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="app-container">
        <CurrentPlayer />
        <Leaderboard players={players}/>
      </div>
    )
  }

}

export default App;