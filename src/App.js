import React, { Component } from 'react';
import GameContainer from './GameComponents/GameContainer.jsx';
import ScoreCount from './GameComponents/ScoreCount.jsx';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      player1score: 0,
      player2score: 0
    }

    this.AppHandleWinner = this.AppHandleWinner.bind(this);


  }

  AppHandleWinner(player1, player2) {
    this.setState({player1score: player1, player2score: player2})

  }

  render() {
    return (
      <div>
        <GameContainer AppHandleWinner={this.AppHandleWinner}/>
        <ScoreCount player1score={this.state.player1score} player2score={this.state.player2score}/>

      </div>


    );
  }
}

export default App;
