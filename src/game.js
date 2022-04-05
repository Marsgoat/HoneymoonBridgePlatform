const SPADE = 0;
const HEART = 1;
const DIAMOND = 2;
const CLUB = 3;

class Game {
  #cards
  #player1Cards = []
  #player2Cards = []

  constructor(playMode){
    this.playMode = playMode
    this.#cards = createDeck()
    for (let i =0; i < 13; i++){
      this.#player1Cards.push(this.#cards.pop())
      this.#player2Cards.push(this.#cards.pop())
    }
  }

  GetPlayer1Cards = () => this.#player1Cards
  GetPlayer2Cards = () => this.#player2Cards
}



/**
 * 洗牌 Fisher-Yates shuffle
 * @param {Array}} 牌組陣列
 */
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[r]] = [deck[r], deck[i]];
  }
}

function createDeck() {
  const deck = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      deck.push({ suit: i, value: j });
    }
  }
  shuffle(deck);
  return deck;
}



module.exports = {
  shuffle,
  createDeck,
  Game,
};
