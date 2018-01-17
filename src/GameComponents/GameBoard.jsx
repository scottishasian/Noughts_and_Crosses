import React from 'react';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: 'x',
      player2: 'o',
      grid: ["","","",
             "","","",
             "","",""]
    };

    this.handleCellClick = this.handleCellClick.bind(this);


  }



  handleCellClick(event) {
    const posClicked = event.target.getAttribute('cellposition');

    console.log(posClicked);

    //this.state.grid[posClicked] = this.state.player;
    const array = this.state.grid.slice(0);

    if(array[posClicked] === "") {
      array[posClicked] = this.state.player;

      this.setState({
        grid: array
        //doesn't set the state immedietly, if wanting so log changes, check the copied array.
      });

      console.log("is full", posClicked);
    }



  }

  render() {
    return (
      <div className="game-board">
        <table>
          <tbody>
            <tr><td cellposition={0} onClick={this.handleCellClick}>{this.state.grid[0]}</td><td cellposition={1} onClick={this.handleCellClick}>{this.state.grid[1]}</td><td cellposition={2} onClick={this.handleCellClick}>{this.state.grid[2]}</td></tr>
            <tr><td cellposition={3} onClick={this.handleCellClick}>{this.state.grid[3]}</td><td cellposition={4} onClick={this.handleCellClick}>{this.state.grid[4]}</td><td cellposition={5} onClick={this.handleCellClick}>{this.state.grid[5]}</td></tr>
            <tr><td cellposition={6} onClick={this.handleCellClick}>{this.state.grid[6]}</td><td cellposition={7} onClick={this.handleCellClick}>{this.state.grid[7]}</td><td cellposition={8} onClick={this.handleCellClick}>{this.state.grid[8]}</td></tr>
          </tbody>

        </table>

      </div>
    )
  }
}

export default GameBoard;
