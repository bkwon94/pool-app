import React from 'react';

const ChooseOption = ({ winnerClick }) => {
  return (
    <div id="options">
      <div className="options-button">New Game</div>
      <div className="options-button">Add Player</div>
      <div className="options-button">Delete Player</div>
    </div>
  )
}

export default ChooseOption;