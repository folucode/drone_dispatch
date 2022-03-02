const { check } = require('express-validator');

const loadValidator = {
  add: [
    check('name')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('name is required')
      .isString()
      .trim()
      .withMessage('name has to be a string')
      .matches(/^[A-Za-z0-9_-]+$/)
      .withMessage(
        'name can contain only letters, numbers, dashes, and underscores'
      ),
    check('weight')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Weight is required')
      .isNumeric()
      .withMessage('Weight has to be a number'),
    check('code')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('code is required')
      .isString()
      .trim()
      .withMessage('code has to be a string')
      .matches(/^[A-Z0-9_]+$/)
      .withMessage(
        'code can contain only uppercase letters, numbers, and underscores'
      ),
    check('id')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('id is required')
      .isMongoId()
      .trim()
      .withMessage('id is not valid'),
  ],
};

module.exports = loadValidator;
