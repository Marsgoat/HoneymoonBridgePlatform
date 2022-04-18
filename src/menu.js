const { shell } = require('electron');

module.exports = [
  {
    label: 'Game',
    submenu: [{ label: 'Play' }, { label: 'Reset' }],
  },
  {
    label: 'Settings',
    submenu: [{ label: 'openAI' }],
  },
  {
    label: 'View',
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'DevTools',
        role: 'toggleDevTools',
      },
      {
        label: 'Github',
        click: () => {
          shell.openExternal('https://github.com/Marsgoat/HoneymoonBridgePlatform');
        },
      },
    ],
  },
];
