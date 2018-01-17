import React from 'react';
import GameBoard from './GameBoard.jsx';

class GameContainer extends React.Component {

  constructor(props){
    super(props);

  }



  render() {
    return (
      <div className="game-container">
        hello
        <GameBoard />
      </div>
    )
  }
}

export default GameContainer;
