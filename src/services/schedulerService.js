const cron = require('node-cron');
const droneService = require('./droneService');

const checkDroneBatteryLevel = () => {
  cron.schedule('0 */12 * * *', () => {
    droneService.checkBatteryLevel();
  });
};

checkDroneBatteryLevel();
