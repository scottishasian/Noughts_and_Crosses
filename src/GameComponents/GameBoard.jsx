import React from 'react';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: 'x',
      grid: ["","","",
             "","","",
             "","",""]
    };

    this.handleCellClick = this.handleCellClick.bind(this);
    this.checkWin = this.checkWin.bind(this);


  }



  handleCellClick(event) {
    const posClicked = event.target.getAttribute('cellposition');

    console.log(posClicked);

    //this.state.grid[posClicked] = this.state.player;
    const array = this.state.grid.slice(0);

    if(array[posClicked] === "") {
      array[posClicked] = this.state.player;
      if(this.state.player === 'x') {
        this.setState({player: 'o'});
    } else if(this.state.player === 'o') {
        this.setState({player: 'x'});
    }
      this.setState({
        grid: array
        //doesn't set the state immedietly, if wanting so log changes, check the copied array.
      });


      this.checkWin(array);
    }
  }


  checkWin(array) {
    if((array[0] === array[1] && array[1] === array[2]) && array[0] !== ""){
      this.gameEnd();
    } else if ((array[3] === array[4] && array[4] === array[5]) && array[3] !== "") {
      this.gameEnd();
    } else if ((array[6] === array[7] && array[7] === array[8]) && array[6] !== "") {
      this.gameEnd(); //Horizontal Win
    } else if ((array[0] === array[3] && array[3] === array[6]) && array[0] !== "") {
      this.gameEnd();
    } else if ((array[1] === array[4] && array[4] === array[7]) && array[1] !== "") {
      this.gameEnd();
    } else if ((array[3] === array[5] && array[5] === array[8]) && array[3] !== "") {
      this.gameEnd(); //Vertical Win
    } else if ((array[0] === array[4] && array[4] === array[8]) && array[0] !== "") {
      this.gameEnd();
    } else if ((array[2] === array[4] && array[4] === array[6]) && array[2] !== "") {
      this.gameEnd();
    }
  }

  gameEnd() {
    console.log("You have won");
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
