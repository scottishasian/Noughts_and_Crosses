import React from 'react';

class GameLogic extends React.Component {

  checkWin(array) {
    if((array[0] === array[1] && array[1] === array[2]) && !""){
      gameEnd();
    } else if (array[3] === array[4] && array[4] === array[5]) && !"") {
      gameEnd();
    } else if (array[6] === array[7] && array[7] === array[8]) && !"") {
      gameEnd(); //Horizontal Win
    } else if (array[0] === array[3] && array[3] === array[6]) && !"") {
      gameEnd();
    } else if (array[1] === array[4] && array[4] === array[7]) && !"") {
      gameEnd();
    } else if (array[3] === array[5] && array[5] === array[8]) && !"") {
      gameEnd(); //Vertical Win
    } else if (array[0] === array[4] && array[4] === array[8]) && !"") {
      gameEnd();
    } else if (array[2] === array[4] && array[4] === array[6]) && !"") {
      gameEnd();
    }
  }

  gameEnd() {

  }

}


export default GameLogic;
