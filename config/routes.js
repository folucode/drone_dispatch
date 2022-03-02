const express = require('express');
const droneController = require('../src/controllers/droneController');

const router = express.Router();
router.get('/', (req, res) => {
  return res.json({
    status: 'success',
    message: "We're good to go!",
  });
});

router.post('/drones', droneController.registerDrone);

module.exports = router;
