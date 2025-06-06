// store gameboard as an array inside a gameboard object. 

const gameboard = (function (){
    const gameboardarray = [];

    for (let i = 0; i < 3; i++) {
  gameboardarray[i] = [];
  for (let j = 0; j < 3; j++) {
    gameboardarray[i][j] = '-'; // valor vacío (string vacío)
  }
  //siguiente paso añadir bordes interiores a la tabla 
}


    return {gameboardarray};
})();

console.log(gameboard.gameboardarray);
// players also stored in objects and object that controls the flow of the game

function createPlayer (name, xORy){
    return{name, xORy};

}

const game = (function (){
 const validXorO = (name, xORy,x, y) => {
    console.log('Valor actual:', gameboard.gameboardarray[x][y]);
    let playerName = name;
    if (gameboard.gameboardarray[x][y]=='-') {
      gameboard.gameboardarray[x][y]=xORy;
      console.log(gameboard.gameboardarray);

      // checks horizontally 
      if(gameboard.gameboardarray[0][1]==xORy&&gameboard.gameboardarray[0][0]==xORy&&gameboard.gameboardarray[0][2]==xORy){
        console.log(playerName+'won');
      }
      if(gameboard.gameboardarray[1][0]==xORy&&gameboard.gameboardarray[1][1]==xORy&&gameboard.gameboardarray[1][2]==xORy){
        console.log(playerName+'won');
      }
      if(gameboard.gameboardarray[2][0]==xORy&&gameboard.gameboardarray[2][1]==xORy&&gameboard.gameboardarray[2][2]==xORy){
        console.log(playerName+'won');
      }
      //checks vertically
      if(gameboard.gameboardarray[0][0]==xORy&&gameboard.gameboardarray[1][0]==xORy&&gameboard.gameboardarray[2][0]==xORy){
        console.log(playerName+'won');
      }
      if(gameboard.gameboardarray[0][1]==xORy&&gameboard.gameboardarray[1][1]==xORy&&gameboard.gameboardarray[2][1]==xORy){
        console.log(playerName+'won');
      }
      if(gameboard.gameboardarray[0][2]==xORy&&gameboard.gameboardarray[1][2]==xORy&&gameboard.gameboardarray[2][2]==xORy){
        console.log(playerName+'won');
      }
      // checks diagonally
      if(gameboard.gameboardarray[0][0]==xORy&&gameboard.gameboardarray[1][1]==xORy&&gameboard.gameboardarray[2][2]==xORy){
        console.log(playerName+'won');
      }
      if(gameboard.gameboardarray[2][0]==xORy&&gameboard.gameboardarray[1][1]==xORy&&gameboard.gameboardarray[0][2]==xORy){
        console.log(playerName+'won');
      }
    

    }
   
  }

  return { validXorO};

})();






const displayDom = {};
displayDom.displayBoard = () => {
  const body = document.body;
  const container = document.createElement('div');
  container.id = 'container'; // Cambiado de class a id

  body.appendChild(container);
  gameboard.gameboardarray.forEach((fila, j) => {
    let coordenadaX =j;
    fila.forEach((cell, i) => {
      let coordenadaY=i;
      const cellD = document.createElement('div');
      cellD.classList.add('cell');
      cellD.id = `${j},${i}`;
      cellD.textContent = cell;
      container.appendChild(cellD);
    });
  });
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
    alert(cell.id);
    if (turno) {
      cell.textContent = 'x';
      
      turno=false;
    } else {
      cell.textContent = 'o';
      turno= true;
    }
  });
});

}


displayDom.domLogic();



/*


document.getElementById('choose-x').addEventListener('click', () => {
  alert('X button clicked');
createPlayer('player1', 'x')
});

document.getElementById('choose-o').addEventListener('click', () => {
  alert('0 button clicked');
  createPlayer('player2', '0')

});
// despues de escoger x o 0 x tiene que tirar, despues 0 ya asi hasta que acabe el juego, una vez que ambos escogieron sus 
// tienes que escoger algo que vaya alternando x y 0

*/