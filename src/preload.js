const { contextBridge } = require('electron');
const { Game } = require('./game');

const game = new Game();

contextBridge.exposeInMainWorld('game', {
  InitGame: () => {
    return [game.GetPlayer1Cards(), game.GetPlayer2Cards()];
  },
});
