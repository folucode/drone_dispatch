const express = require('express');
const droneController = require('../src/controllers/droneController');
const droneValidator = require('../src/middlewares/droneValidator');
const validatorHandler = require('../src/middlewares/validationHandler');

const router = express.Router();
router.get('/', (req, res) => {
  return res.json({
    status: 'success',
    message: "We're good to go!",
  });
});

router.post('/drones', droneValidator.create, validatorHandler, droneController.registerDrone);

module.exports = router;
