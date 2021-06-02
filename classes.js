let htmlTable = document.getElementsByClassName('square'); // console.log(htmlTable)
let ticTacToeGame = [... htmlTable]; // console.log(ticTacToeGame);

class gameSquares {
    constructor(id,value,color) {
        this.id = id,
        this.value = value,
        this.color = color
    }
}

let topLeftSquare = new gameSquares('tl','value','green')
// console.log(topLeftSquare.id)

for (let i=0; i < ticTacToeGame.length; i++) {
    console.log(ticTacToeGame[i].id);
    console.log(ticTacToeGame[i].value);
    console.log(ticTacToeGame[i].style.backgroundColor);
}