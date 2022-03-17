const SPADE = 0;
const HEART = 1;
const DIAMOND = 2;
const CLUB = 3;

/**
 * 洗牌 Fisher-Yates shuffle
 * @param {Array}} 牌組陣列
 */
// function shuffle(deck) {
//   for (let i = deck.length - 1; i > 0; i--) {
//     const r = Math.floor(Math.random() * (i + 1));
//     [deck[i], deck[r]] = [deck[r], deck[i]];
//   }
// }
exports.shuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[r]] = [deck[r], deck[i]];
  }
};

exports.createDeck = () => {
  const deck = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 14; j++) {
      deck.push({ suit: i, value: j });
    }
  }
  exports.shuffle(deck);
  return deck;
};
