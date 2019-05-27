import React from 'react';

const LeaderboardRow = ({ player, playerClick }) => {
  return (
    <tr className="leaderboard-row" onClick={() => playerClick(player)}>

      <td id="td-place">{player.place}</td>
      <td id="td-image"><img src={player.image}/></td>
      <td id="td-name">{player.name}</td>
      <td id="td-wins">{player.wins}</td>

    </tr>
  )
}

export default LeaderboardRow;