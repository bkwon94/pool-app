import React from 'react';

const CurrentPlayer = ({ current }) => {

  if (!current) {
    return (
      <div className="current-player-section">
        <h1>O<sub>3</sub> World Pool Leaderboard</h1>
        <div className="player-info">
          <h4>place</h4>
          <h4>IMAGE</h4>
          <h4>WINS</h4>
        </div>
      </div>
    )
  } else {
    return (
      <div className="current-player-section">
        <h1>O<sub>3</sub> World Pool Leaderboard</h1>
        <div className="player-info">
          <h4>{current.place}</h4>
          <h4>{current.image}</h4>
          <h4>{current.wins}</h4>
        </div>
      </div>
    )
  }

}

export default CurrentPlayer;