const startGameBtn = document.getElementById('startGame');

const suits = ['s', 'h', 'd', 'c'];
const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

startGameBtn.addEventListener('click', function () {
  const cards = window.game.InitGame();

  const player1Board = document.getElementById('player1Board');
  const player2Board = document.getElementById('player2Board');

  cards[0].forEach((card) => {
    const img = document.createElement('img');
    const src = 'img/poker/' + numbers[card.value] + suits[card.suit] + '.svg';
    img.src = src;
    img.width = '50';
    player1Board.appendChild(img);
  });

  cards[1].forEach((card) => {
    const img = document.createElement('img');
    const src = 'img/poker/' + numbers[card.value] + suits[card.suit] + '.svg';
    img.src = src;
    img.width = '50';
    player2Board.appendChild(img);
  });
});
