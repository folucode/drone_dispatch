const { check, query } = require('express-validator');
const { droneModelTypes, droneStateTypes } = require('../utils/options');

const droneValidator = {
  create: [
    check('serialNumber')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Serial Number is required')
      .isString()
      .trim()
      .withMessage('Serial Number has to be a string')
      .isLength({ max: 100 })
      .withMessage("Serial Number can't be more than 100 characters")
      .toUpperCase(),
    check('model')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Model is required')
      .isString()
      .trim()
      .withMessage('Serial Number has to be a string')
      .isIn(droneModelTypes)
      .withMessage(`Model type has to be either ${droneModelTypes.join(', ')}`),
    check('weight')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Weight is required')
      .isNumeric()
      .withMessage('Weight has to be a number')
      .isInt({ max: 500 })
      .withMessage("weight can't be more than 500"),
    check('batteryLevel')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Battery capacity is required')
      .isNumeric()
      .withMessage('Battery capacity has to be a number')
      .isInt({ max: 100 })
      .withMessage("Battery capacity can't be more than 100%"),
    check('state')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('state is required')
      .isString()
      .trim()
      .withMessage('state has to be a string')
      .isIn(droneStateTypes)
      .withMessage(`state type has to be either ${droneStateTypes.join(', ')}`),
  ],
  getLoad: [
    check('id')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('id is required')
      .isMongoId()
      .trim()
      .withMessage('id is not valid'),
  ],
};

module.exports = droneValidator;
