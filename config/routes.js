const express = require('express');
const droneController = require('../src/controllers/droneController');
const loadController = require('../src/controllers/loadController');
const droneValidator = require('../src/middlewares/droneValidator');
const loadValidator = require('../src/middlewares/loadValidator');
const validatorHandler = require('../src/middlewares/validationHandler');

const router = express.Router();
router.get('/', (req, res) => {
  return res.json({
    status: 'success',
    message: "We're good to go!",
  });
});

router.post('/drones', droneValidator.create, validatorHandler, droneController.registerDrone);
router.post('/drones/:id/load', loadValidator.add, validatorHandler, loadController.addLoad);
router.get('/drones/:id/load', droneValidator.getLoad, validatorHandler, droneController.getLoad);
router.get('/drones', droneController.getDrones);

module.exports = router;
