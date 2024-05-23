const { body, param, validationResult } = require('express-validator');

const validateQuarto = [
  body('numero')
    .notEmpty().withMessage('O campo número é obrigatório')
    .isInt({ min: 1 }).withMessage('O campo número deve ser um inteiro positivo'),
  body('tipo')
    .notEmpty().withMessage('O campo tipo é obrigatório')
    .isString().withMessage('O campo tipo deve ser uma string'),
  body('preco')
    .notEmpty().withMessage('O campo preço é obrigatório')
    .isFloat({ min: 0 }).withMessage('O campo preço deve ser um número positivo')
];

const validateQuartoID = [
  param('id')
    .notEmpty().withMessage('O ID é obrigatório')
    .isMongoId().withMessage('O ID deve ser um ID MongoDB válido')
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateQuarto,
  validateQuartoID,
  validate
};
