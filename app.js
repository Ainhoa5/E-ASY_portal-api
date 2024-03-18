// app.js
const express = require('express');
const app = express();

const setupMiddleware = require('./middleware/middleware');
const { handle404, handleErrors } = require('./middleware/errorHandling');
const islasRoutes = require('./api/routes/islas');

// Configura middlewares comunes
setupMiddleware(app);

// Rutas
app.use('/islas', islasRoutes);

// Manejo de errores
app.use(handle404);
app.use(handleErrors);

module.exports = app;
