import React from 'react';
import ChooseOption from './ChooseOption.jsx';

const CurrentPlayer = ({ current, defaultPlayer }) => {

  // Display proper suffix based on place
  // 1st, 2nd, 3rd, 4th, 5th ..... etc
  const createSuffix = (place) => {
    let suffix = '';
    if (place === 1) {
      suffix = 'st';
    } else if (place === 2) {
      suffix = 'nd';
    } else if (place === 3) {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
    return suffix;
  }

  if (!current) {
    return (
      <div className="current-player-section">
        <h1>O<sub>3</sub> World Pool Leaderboard</h1>
        <div className="player-info">
          <p>
            <span className="player-info-bold">
              {`${defaultPlayer.place}`}
            </span>{`${createSuffix(defaultPlayer.place)}`}
          </p>
          <img src={defaultPlayer.image} alt="player image"/>
          <p>
            <span className="player-info-bold">
              {defaultPlayer.wins}
            </span> wins
          </p>
        </div>

      </div>
    )
  } else {
    return (
      <div className="current-player-section">
        <h1>O<sub>3</sub> World Pool Leaderboard</h1>
        <div className="player-info">
          <p>
            <span className="player-info-bold">
              {`${current.place}`}
            </span>{`${createSuffix(current.place)}`}
          </p>
          <img src={current.image} alt="player image"/>
          <p>
            <span className="player-info-bold">
              {current.wins}
            </span> wins
          </p>
        </div>

      </div>
    )
  }

}

export default CurrentPlayer;