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

player1 = createPlayer('Pedro', 'x');
player2 = createPlayer('viani','y');

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

game.validXorO(player1.name, player1.xORy, 0, 1);
game.validXorO(player2.name, player2.xORy, 0, 0);
game.validXorO(player1.name, player1.xORy, 0, 2);
game.validXorO(player2.name, player2.xORy, 2, 2);
game.validXorO(player1.name, player1.xORy, 2, 0);
game.validXorO(player2.name, player2.xORy, 1, 1);




