import React from 'react';
import { useState } from 'react';

const ChooseOption = ({ setPlayerAdded, playerAdded, players }) => {

  const [newGame, setNewGame] = useState(false);
  const [addPlayer, setAddPlayer] = useState(false);
  const [name, setName] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

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
      });
  }
  // On a back click, set state accordingly to render the default display of buttons
  const handleBackClick = () => {
    setNewGame(false);
    setAddPlayer(false);
  }
  // Handle change when user selects from dropdown for PLAYER 1
  const handleSelectChangeP1 = (event) => {
    console.log(event.target.value);
    setPlayer1(event.target.value);
  }
  // Handle change for PLAYER 2
  const handleSelectChangeP2 = (event) => {
    console.log(event.target.value);
    setPlayer2(event.target.value);
  }
  // If winner is selected, send the name to server in order to update records
  // Simulate player added so data is re-fetched and causes render
  const handleWinner = (player) => {
    fetch('/players', {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: player
      })
    })
      .then(() => {
        setPlayerAdded(!playerAdded);
      })
  }

  // Case when neither new game nor add player has been clicked
  if (!newGame && !addPlayer) {
    return (
      <div className="options">
        <div className="options-button" onClick={() => setNewGame(true)}>New Game</div>
        <div className="options-button" onClick={() => setAddPlayer(true)}>Add Player</div>
      </div>
    )
  } else if (newGame && !addPlayer && players) { //New game screen
    return (
      <div className="options">
        <div className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="dropdown-container">
          <select value={player1} onChange={handleSelectChangeP1}>
            {
              players.map((player, index) => {
                return <option key={index}>{player.name}</option>
              })
            }
          </select>
          <i className="fas fa-trophy winner-icon" onClick={() => handleWinner(player1)}></i>

          <select value={player2} onChange={handleSelectChangeP2}>
            {
              players.map((player, index) => {
                return <option key={index}>{player.name}</option>
              })
            }
          </select>
          <i className="fas fa-trophy winner-icon" onClick={() => handleWinner(player2)}></i>
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