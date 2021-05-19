// const middleSquare = document.getElementById('m');

// middleSquare.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log("You clicked me!")
// })

// document.addEventListener('keyup', function(event) {
//     if (event.keyCode === 13) {
//     console.log("Hello")
//     const value = middleSquare.value
//     if (value === 'x' || value === 'X') {
//     console.log('Value is X')
//     middleSquare.style.backgroundColor = 'lightblue';
//     }
//     }
// })
//

// document.addEventListener('keyup', function(event) {
//     if (event.keyCode == 13) {
//         console.log("Hello")
//     }
// })

const ticTacToe = document.getElementsByClassName('square')
const ticTacToeSquares = [... ticTacToe];

ticTacToeSquares.forEach(element => {
    element.addEventListener('click', function(event) {
        console.log("hello")
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
        }
    })
})