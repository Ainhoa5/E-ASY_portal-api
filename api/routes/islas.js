const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const islandController = require('../controllers/islasControllers');

// Validación básica para el código de verificación
const verificationCodeValidationRules = [
  body('codigoVerificacion').trim().isLength({ min: 1 }).withMessage('El código de verificación es obligatorio.')
];

// Middleware para manejar los errores de validación
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Ruta para verificar el acceso a una isla específica a través de su código
router.post('/', verificationCodeValidationRules, validate, islandController.verifyAccess);

module.exports = router;
