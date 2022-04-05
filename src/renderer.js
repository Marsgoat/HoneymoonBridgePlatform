let startGameBtn = document.getElementById("startGame");

let suits = ["s", "h", "d", "c"];
let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

startGameBtn.addEventListener("click", function(){
    let cards = window.game.InitGame();

    let player1Board = document.getElementById("player1Board");
    let player2Board = document.getElementById("player2Board");

    cards[0].forEach(card => {
        let img = document.createElement('img');
        let src = 'img/poker/' + numbers[card.value] + suits[card.suit] + '.svg'
        img.src = src;
        img.width = "50";
        player1Board.appendChild(img);
    });

    cards[1].forEach(card => {
        let img = document.createElement('img');
        let src = 'img/poker/' + numbers[card.value] + suits[card.suit] + '.svg'
        img.src = src;
        img.width = "50";
        player2Board.appendChild(img);
    });
})




