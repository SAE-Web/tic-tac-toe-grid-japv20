const ticTacToe = document.getElementsByClassName('square')
const ticTacToeSquares = [... ticTacToe];

ticTacToeSquares.forEach(element => {
    element.addEventListener('click', function(event) {
        // console.log("hello")
        element.style.fontSize = "80px";
        element.style.textAlign = 'center';
    })

    function blueBackground(gameSquare) {
        gameSquare.style.backgroundColor = 'lightblue';
        gameSquare.disabled = true;
    }

    function greenBackground(gameSquare) {
        gameSquare.style.backgroundColor = 'lightgreen';
        gameSquare.disabled = true;
    }

    document.addEventListener('keyup', function(event) {
        if (event.keyCode == 13) {
            playerInput = element.value;
            if (playerInput == "X" || playerInput == "x") {
                blueBackground(element)
            }

            if (playerInput == "O" || playerInput == "o") {
                greenBackground(element)
            }

            // let xFilter = ticTacToeSquares.filter(function(element){
            //     return element.value == "X" | "x";
            // })
            // console.log(xFilter);

            // let oFilter = ticTacToeSquares.filter(function(element){
            //     return element.value == "O" | "o";
            // })
            // console.log(oFilter);
        }
    })
})
