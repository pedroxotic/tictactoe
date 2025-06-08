// store gameboard as an array inside a gameboard object. 

let gameboard ={};

 gameboard.arrayConstructor = function   (){
    const gameboardarray = [];

    for (let i = 0; i < 3; i++) {
  gameboardarray[i] = [];
  for (let j = 0; j < 3; j++) {
    gameboardarray[i][j] = '-'; // valor vacío (string vacío)
  }
}
return gameboardarray;
 
};

gameboard.gameboardarray = gameboard.arrayConstructor();

console.log(gameboard.gameboardarray);
// players also stored in objects and object that controls the flow of the game

function createPlayer (name, xORy){
    let counter =0;
    return{name, xORy, counter};

}
let player1;
let player2;


const game = (function (){
 const validXorO = (player, x, y) => {
    console.log(gameboard.gameboardarray[x][y]);

    // checks horizontally 
    if (
      gameboard.gameboardarray[0][1] == player.xORy &&
      gameboard.gameboardarray[0][0] == player.xORy &&
      gameboard.gameboardarray[0][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray[1][0] == player.xORy &&
      gameboard.gameboardarray[1][1] == player.xORy &&
      gameboard.gameboardarray[1][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray[2][0] == player.xORy &&
      gameboard.gameboardarray[2][1] == player.xORy &&
      gameboard.gameboardarray[2][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    //checks vertically
    if (
      gameboard.gameboardarray[0][0] == player.xORy &&
      gameboard.gameboardarray[1][0] == player.xORy &&
      gameboard.gameboardarray[2][0] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray[0][1] == player.xORy &&
      gameboard.gameboardarray[1][1] == player.xORy &&
      gameboard.gameboardarray[2][1] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray[0][2] == player.xORy &&
      gameboard.gameboardarray[1][2] == player.xORy &&
      gameboard.gameboardarray[2][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    // checks diagonally
    if (
      gameboard.gameboardarray[0][0] == player.xORy &&
      gameboard.gameboardarray[1][1] == player.xORy &&
      gameboard.gameboardarray[2][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray[2][0] == player.xORy &&
      gameboard.gameboardarray[1][1] == player.xORy &&
      gameboard.gameboardarray[0][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray.every(fila =>
        fila.every(celda => celda !== '-')
      )
    ) {
      alert('board full tie');
      emptyBoard();
    }

    gameboard.gameboardarray[x][y] = player.xORy;
    console.log(gameboard.gameboardarray);

    // checks horizontally 
    if (
      gameboard.gameboardarray[0][1] == player.xORy &&
      gameboard.gameboardarray[0][0] == player.xORy &&
      gameboard.gameboardarray[0][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray[1][0] == player.xORy &&
      gameboard.gameboardarray[1][1] == player.xORy &&
      gameboard.gameboardarray[1][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray[2][0] == player.xORy &&
      gameboard.gameboardarray[2][1] == player.xORy &&
      gameboard.gameboardarray[2][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    //checks vertically
    if (
      gameboard.gameboardarray[0][0] == player.xORy &&
      gameboard.gameboardarray[1][0] == player.xORy &&
      gameboard.gameboardarray[2][0] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray[0][1] == player.xORy &&
      gameboard.gameboardarray[1][1] == player.xORy &&
      gameboard.gameboardarray[2][1] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray[0][2] == player.xORy &&
      gameboard.gameboardarray[1][2] == player.xORy &&
      gameboard.gameboardarray[2][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    // checks diagonally
    if (
      gameboard.gameboardarray[0][0] == player.xORy &&
      gameboard.gameboardarray[1][1] == player.xORy &&
      gameboard.gameboardarray[2][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray[2][0] == player.xORy &&
      gameboard.gameboardarray[1][1] == player.xORy &&
      gameboard.gameboardarray[0][2] == player.xORy
    ) {
      player.counter += 1;
      console.log(player.name + ' score: ' + player.counter);
      alert(player.name + ' won');
      emptyBoard();
    }
    if (
      gameboard.gameboardarray.every(fila =>
        fila.every(celda => celda !== '-')
      )
    ) {
      alert('board full tie');
      emptyBoard();
    }
  }


const emptyBoard = (function (){

  delete gameboard.gameboardarray;
  // vuelves a crear el array
  gameboard.gameboardarray = gameboard.arrayConstructor();
  console.log( gameboard.gameboardarray);
// lamar a la función  que  vuelve a hacer display del array
displayDom.deleteDomContainer();
displayDom.displayBoard();
displayDom.domLogic();



})




  return { validXorO, emptyBoard};

})();






const displayDom = {};
displayDom.displayBoard = () => {
  const boardArea = document.getElementById('board-area');
  // Remove any existing board
  const oldContainer = document.getElementById('container');
  if (oldContainer) oldContainer.remove();
  const container = document.createElement('div');
  container.id = 'container';

  boardArea.appendChild(container);
  gameboard.gameboardarray.forEach((fila, j) => {
    let coordenadaX = j;
    fila.forEach((cell, i) => {
      let coordenadaY = i;
      const cellD = document.createElement('div');
      cellD.classList.add('cell');
      cellD.id = `${j},${i}`;
      cellD.textContent = cell;
      container.appendChild(cellD);
    });
  });
};

displayDom.deleteDomContainer = function () {
  const container = document.getElementById('container');
  if (container) {
    container.remove();
  }
};







displayDom.domLogic = () =>{

  const container = document.getElementById('container');
  let turno =true;


let cell = document.querySelectorAll('.cell');

cell.forEach(cell => {
  cell.addEventListener('click', () => {
    const [x, y] = cell.id.split(',').map(Number);
     if (gameboard.gameboardarray[x][y] != '-') {
      alert('place already taken')
     }
     else{
        

      if (turno) {
      cell.textContent = player1.xORy;
      game.validXorO(player1,x,y);
      turno=false;
      } else {
      cell.textContent = player2.xORy;
      game.validXorO(player2,x,y);
            turno= true;


    }
  }
  });
});

}



const restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', () => {
game.emptyBoard();
});


/*


Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that shows the results upon game end!
*/
const endBtn = document.getElementById('end');
document.getElementById('choose-player').addEventListener("submit", (e)=>{
  e.preventDefault();
  displayDom.displayBoard();
  displayDom.domLogic();
  const chosePlayerForm = document.getElementById('choose-player');

  document.getElementById('restart').style.display = 'block';
  let Player1name = chosePlayerForm.elements['playerXName'].value;
  let Player2name = chosePlayerForm.elements['player0Name'].value;

  player1 = createPlayer(Player1name, 'x');
  player2 = createPlayer(Player2name, '0');
  chosePlayerForm.style.display = 'none';

   endBtn.style.display = 'block';


})

endBtn.addEventListener('click', ()=>{

alert("Player 1: " + player1.counter + "\nPlayer 2: " + player2.counter);
})



//add a display element that shows the results upon game end!
