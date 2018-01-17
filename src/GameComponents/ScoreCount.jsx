import React from 'react';

class ScoreCount extends React.Component {

  render() {
    return (
      <div className="score-board">
        <h1>Player 1 Score: {this.props.player1score}</h1>
        <h1>Player 2 Score: {this.props.player2score}</h1>

      </div>
    )
  }
}

export default ScoreCount;
