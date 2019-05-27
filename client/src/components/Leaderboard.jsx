import React from 'react';
import LeaderboardRow from './LeaderboardRow.jsx';

const Leaderboard = ({ players, playerClick }) => {
  return (

      <table className="leaderboard">
        {
          players.map((player, index) => {
            return <LeaderboardRow player={player} playerClick={playerClick} key={index}/>
          })
        }
      </table>

  )
}

export default Leaderboard;