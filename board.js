$(() =>{
    alert("Hello! Using JQuery")
    console.log("Hello")

    let squaresTicTacToe = $('.square')
    console.dir(squaresTicTacToe)

    $.each(squaresTicTacToe, element => {
        $(".square").click(function() {
            console.log("you clicked me")
            $(".square").css("font-size = 80px");
        })
    })
})