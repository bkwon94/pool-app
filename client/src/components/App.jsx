import React from 'react';
import ChooseWinner from './ChooseWinner.jsx';
import Leaderboard from './Leaderboard.jsx';
import CurrentPlayer from './CurrentPlayer.jsx';

const App = () => {
  return (
    <div className="app-container">
      {/* <ChooseWinner /> */}
      <CurrentPlayer />
      <Leaderboard />
    </div>
  )
}

export default App;