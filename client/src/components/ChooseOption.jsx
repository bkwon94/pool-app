import React from 'react';
import { useState } from 'react';

const ChooseOption = ({ setPlayerAdded, playerAdded }) => {

  const [newGame, setNewGame] = useState(false);
  const [addPlayer, setAddPlayer] = useState(false);
  const [name, setName] = useState('');

  // On form submit, send data to server -> database
  // Give default avatar for now
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
    })
      .then(() => {
        setPlayerAdded(!playerAdded);
      })
  }
  // On a back click, set state accordingly to render the default display of buttons
  const handleBackClick = () => {
    setNewGame(false);
    setAddPlayer(false);
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
        <div className="back-button" onClick={handleBackClick}>
          <i className="fas fa-hand-point-left"></i>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Enter name..."/>
          <input type="submit" value="Create"/>
        </form>
      </div>
    )
  }

}

export default ChooseOption;