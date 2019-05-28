import React from 'react';
import { useState } from 'react';

const ChooseOption = ({ setPlayerAdded, playerAdded, players }) => {

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
  } else if (newGame && !addPlayer && players) {
    return (
      <div className="options">
        <div className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="dropdown-container">
          <select>
            {
              players.map((player, index) => {
                return <option key={index}>{player.name}</option>
              })
            }
          </select>
          <i className="fas fa-trophy winner-icon"></i>

          <select>
            {
              players.map((player, index) => {
                return <option key={index}>{player.name}</option>
              })
            }
          </select>
          <i className="fas fa-trophy winner-icon"></i>
        </div>
      </div>
    )
  } else {
    return (
      <div className="options">
        <div className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <form onSubmit={handleSubmit} className="name-input">
          <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Enter name..."/>
          <input id="submit-button" type="submit" value="Create"/>
        </form>
      </div>
    )
  }

}

export default ChooseOption;