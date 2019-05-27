import React from 'react';

const LeaderboardRow = ({ player }) => {
  return (
    <tr className="leaderboard-row">
      <td>{player.place}</td>
      <td><img src={player.image}/></td>
      <td>{player.name}</td>
      <td>{player.wins}</td>
    </tr>
  )
}

export default LeaderboardRow;