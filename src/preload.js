const {contextBridge, ipcRenderer} = require('electron');
const {Game} = require("./game")

var game = new Game();

contextBridge.exposeInMainWorld('game', {
  InitGame: () => {
    return [
      game.GetPlayer1Cards(),
      game.GetPlayer2Cards()
    ];
    
  }
});
