const { body, validationResult } = require('express-validator');

const validateReserva = [
  body('quarto')
    .notEmpty().withMessage('O campo quarto é obrigatório')
    .isMongoId().withMessage('O campo quarto deve ser um ID MongoDB válido'),
  body('dataEntrada')
    .notEmpty().withMessage('O campo dataEntrada é obrigatório')
    .isISO8601().withMessage('O campo dataEntrada deve ser uma data válida no formato ISO 8601'),
  body('dataSaida')
    .notEmpty().withMessage('O campo dataSaida é obrigatório')
    .isISO8601().withMessage('O campo dataSaida deve ser uma data válida no formato ISO 8601')
    .custom((value, { req }) => {
      if (new Date(value) <= new Date(req.body.dataEntrada)) {
        throw new Error('A data de saída deve ser posterior à data de entrada');
      }
      return true;
    }),
  body('cliente')
    .notEmpty().withMessage('O campo cliente é obrigatório')
    .isString().withMessage('O campo cliente deve ser uma string')
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateReserva,
  validate
};
