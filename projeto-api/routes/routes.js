// No arquivo routes.js

const express = require('express');
const router = express.Router();

// Importando controladores
const QuartoController = require('../controllers/QuartoController');
const ReservaController = require('../controllers/ReservaControllers');

// Rotas para quartos
router.get('/quartos', QuartoController.buscarTodos);
router.get('/quartos/:id', QuartoController.buscarPorID);
router.post('/quartos', QuartoController.criar);
router.put('/quartos/:id', QuartoController.atualizar);
router.delete('/quartos/:id', QuartoController.remover);

// Rotas para reservas
router.get('/reservas', ReservaController.buscarTodos);
router.get('/reservas/:id', ReservaController.buscarPorID);
router.post('/reservas', ReservaController.criar);
router.put('/reservas/:id', ReservaController.atualizar);
router.delete('/reservas/:id', ReservaController.remover);

module.exports = router;

