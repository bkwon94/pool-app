import React from 'react';
import LeaderboardRow from './LeaderboardRow.jsx';

const Leaderboard = ({ players, playerClick }) => {
  // Sort the array of players by wins
  const sortPlayers = (playersArray) => {
    return playersArray.sort((a, b) => b.wins - a.wins);
  }
  sortPlayers(players);

  return (

    <table className="leaderboard">
      {
        players.map((player, index) => {
          return <LeaderboardRow player={player} playerClick={playerClick} key={index} place={index + 1}/>
        })
      }
    </table>

  )
}

export default Leaderboard;