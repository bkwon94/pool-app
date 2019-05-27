import React from 'react';
import LeaderboardRow from './LeaderboardRow.jsx';

const Leaderboard = ({ players }) => {
  return (

      <table className="leaderboard">
        {
          players.map((player, index) => {
            return <LeaderboardRow player={player} key={index}/>
          })
        }
      </table>

  )
}

export default Leaderboard;