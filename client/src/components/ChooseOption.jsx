import React from 'react';
import { useState } from 'react';

const ChooseOption = () => {

  const [newGame, setNewGame] = useState(false);
  const [addPlayer, setAddPlayer] = useState(false);

  if (!newGame && !addPlayer) {
    return (
      <div id="options">
        <div className="options-button" onClick={() => setNewGame(true)}>New Game</div>
        <div className="options-button" onClick={() => setAddPlayer(true)}>Add Player</div>
      </div>
    )
  } else if (newGame && !addPlayer) {
    return (
      <div>
        <ul>
          <li>yo</li>
        </ul>
        <ul>
          <li>yo</li>
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        ADD NEW PLAYER
      </div>
    )
  }

}

export default ChooseOption;