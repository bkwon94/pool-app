import React from 'react';

const LeaderboardRow = ({ player }) => {
  return (
    <div>
      <tr>
        <td>{player.place}</td>
        <td><img src={player.image}/></td>
        <td>{player.name}</td>
        <td>{player.wins}</td>
      </tr>
    </div>
  )
}

export default LeaderboardRow;