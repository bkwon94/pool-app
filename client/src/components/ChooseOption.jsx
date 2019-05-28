import React from 'react';
import { useState } from 'react';

const ChooseOption = ({ winnerClick }) => {

  return (
    <div id="options">
      <div className="options-button" onClick={() => openModal(true)}>New Game</div>
      <div className="options-button">Add Player</div>
    </div>
  )
}

export default ChooseOption;