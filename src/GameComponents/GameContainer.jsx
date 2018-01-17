import React from 'react';
import GameBoard from './GameBoard.jsx';

class GameContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      player1score: 0,
      player2score: 0
      // grid: ["","","",
      //        "","","",
      //        "","",""],
    };

    this.handleWinner = this.handleWinner.bind(this);


  }

  handleWinner(win) {
    if(win === 'x'){
      this.setState({player1score: this.state.player1score++})
    } else if (win === 'o') {
      this.setState({player1score: this.state.player2score++})
    }
    this.props.AppHandleWinner(this.state.player1score, this.state.player2score)
    console.log("player 1 score:", this.state.player1score);
    console.log("player 2 score:", this.state.player2score);
  }

  takeReplayFromBoard() {
    // this.setState({grid: ["","","",
    //                       "","","",
    //                       "","",""]})
    console.log("replay button");
  }


  render() {
    return (
      <div className="game-container">
        <h1>Noughts & Crosses</h1>
        <GameBoard player1score={this.state.player1score}
          handleReplay player2score={this.state.player2score}
          handleWinner={this.handleWinner}
          takeReplayFromBoard={this.takeReplayFromBoard}
          gameBoard={this.state.grid}/>
        <button onClick={this.takeReplayFromBoard}> Replay </button>
      </div>
    )
  }
}

export default GameContainer;
