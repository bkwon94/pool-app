import React from 'react';
import ChooseOption from './ChooseOption.jsx';

const CurrentPlayer = ({ current, players }) => {

  // Display proper suffix based on place
  // 1st, 2nd, 3rd, 4th, 5th ..... etc
  const createSuffix = (place) => {
    let suffix = '';
    let placeAsString = place.toString();
    let lastChar = placeAsString[placeAsString.length - 1];
    if (Number(lastChar) === 1) {
      suffix = 'st';
    } else if (Number(lastChar) === 2) {
      suffix = 'nd';
    } else if (Number(lastChar) === 3) {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
    return suffix;
  }
  // If no player selected, display top player with most wins
  const findTopPlayer = (players) => {
    let sortedOrder = players.sort((a, b) => b.wins - a.wins);
    let topPlayer = sortedOrder[0];
    return topPlayer;
  }

  if (!current) {
    return (
      <div className="current-player-section">
        <p>O<sub>3</sub> World Pool Leaderboard</p>
        <div className="player-info">
          <p>
            <span className="player-info-bold">
              1
            </span>{`${createSuffix(1)}`}
          </p>
          <img src={findTopPlayer(players).image} alt="player image"/>
          <p>
            <span className="player-info-bold">
              {findTopPlayer(players).wins}
            </span> w's
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="current-player-section">
        <p>O<sub>3</sub> World Pool Leaderboard</p>
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
            </span> w's
          </p>
        </div>
      </div>
    )
  }

}

export default CurrentPlayer;