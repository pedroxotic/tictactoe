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
    return{name, xORy};

}

const game = (function (){
 const validXorO = (name, xORy,x, y) => {
    
      gameboard.gameboardarray[x][y]=xORy;
      console.log(gameboard.gameboardarray);

      // checks horizontally 
      if(gameboard.gameboardarray[0][1]==xORy&&gameboard.gameboardarray[0][0]==xORy&&gameboard.gameboardarray[0][2]==xORy){
        alert(name+' won');
            emptyBoard();

      }
      if(gameboard.gameboardarray[1][0]==xORy&&gameboard.gameboardarray[1][1]==xORy&&gameboard.gameboardarray[1][2]==xORy){
        alert(name+' won');
            emptyBoard();

      }
      if(gameboard.gameboardarray[2][0]==xORy&&gameboard.gameboardarray[2][1]==xORy&&gameboard.gameboardarray[2][2]==xORy){
        alert(name+' won');
            emptyBoard();

      }
      //checks vertically
      if(gameboard.gameboardarray[0][0]==xORy&&gameboard.gameboardarray[1][0]==xORy&&gameboard.gameboardarray[2][0]==xORy){
        alert(name+' won');
            emptyBoard();

      }
      if(gameboard.gameboardarray[0][1]==xORy&&gameboard.gameboardarray[1][1]==xORy&&gameboard.gameboardarray[2][1]==xORy){
        alert(name+' won');
            emptyBoard();

      }
      if(gameboard.gameboardarray[0][2]==xORy&&gameboard.gameboardarray[1][2]==xORy&&gameboard.gameboardarray[2][2]==xORy){
        alert(name+' won');
            emptyBoard();

      }
      // checks diagonally
      if(gameboard.gameboardarray[0][0]==xORy&&gameboard.gameboardarray[1][1]==xORy&&gameboard.gameboardarray[2][2]==xORy){
        alert(name+' won');
            emptyBoard();

      }
      if(gameboard.gameboardarray[2][0]==xORy&&gameboard.gameboardarray[1][1]==xORy&&gameboard.gameboardarray[0][2]==xORy){
        alert(name+' won');
            emptyBoard();

      }
    if(gameboard.gameboardarray.every(fila =>
  fila.every(celda => celda !== '-')))
  {
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
  

  return { validXorO};

})();






const displayDom = {};
displayDom.displayBoard = () => {
  const body = document.body;
  const container = document.createElement('div');
  container.id = 'container'; // Cambiado de class a id

  body.appendChild(container);
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



displayDom.displayBoard();

const player1= createPlayer('pedro', 'x');
const player2= createPlayer('viani', '0');


displayDom.domLogic = () =>{

  const container = document.getElementById('container');
  let turno =true;


let cell = document.querySelectorAll('.cell');

cell.forEach(cell => {
  cell.addEventListener('click', () => {
        const [x, y] = cell.id.split(',').map(Number);

    if (turno) {
      cell.textContent = player1.xORy;
      game.validXorO(player1.name, player1.xORy,x,y);
      turno=false;
    } else {
      cell.textContent = player2.xORy;
      game.validXorO(player2.name, player2.xORy,x,y);
            turno= true;


    }
  });
});

}


displayDom.domLogic();



/*


logic that prevents players from playing in spots already taken 
Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that shows the results upon game end!
*/