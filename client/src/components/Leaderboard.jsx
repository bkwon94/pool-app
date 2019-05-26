import React from 'react';
import LeaderboardRow from './LeaderboardRow.jsx';

const Leaderboard = ({ players }) => {
  return (
    <div>
      <table>
        {
          players.map((player, index) => {
            return <LeaderboardRow player={player} key={index}/>
          })
        }
      </table>
    </div>
  )
}

export default Leaderboard;