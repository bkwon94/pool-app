import React from 'react';
import { useState } from 'react';

const ChooseOption = () => {

  const [newGame, setNewGame] = useState(false);
  const [addPlayer, setAddPlayer] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/players', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: name,
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/haligaliharun/128.jpg',
        wins: 0
      })
    });
  }

  if (!newGame && !addPlayer) {
    return (
      <div className="options">
        <div className="options-button" onClick={() => setNewGame(true)}>New Game</div>
        <div className="options-button" onClick={() => setAddPlayer(true)}>Add Player</div>
      </div>
    )
  } else if (newGame && !addPlayer) {
    return (
      <div className="options">
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
      <div className="options">
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Enter name..."/>
          <input type="submit" value="Create"/>
        </form>
      </div>
    )
  }

}

export default ChooseOption;