const db = require('./utils/db');
const {checkLogin} = require('./utils/node-storage');
const telegram = require('./utils/init')
const config = require('./config')

function startListener() {
    console.log('[+] starting listener');
    telegram.on('updateShort', ({ updates }) => {
      console.log(updates);
    });
}
const start = async () => {
  await checkLogin();
  startListener();
}

start()
