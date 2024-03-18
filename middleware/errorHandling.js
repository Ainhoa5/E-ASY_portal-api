// Middleware para manejar rutas no encontradas (404).
const handle404 = (req, res, next) => {
    const error = new Error('Not found'); // Crea un nuevo objeto Error con un mensaje 'Not found'.
    error.status = 404; // Asigna el código de estado HTTP 404 al error.
    next(error); // Pasa el error al siguiente middleware en la cadena, el middleware de manejo de errores.
};

// Middleware para manejar cualquier error que ocurra durante el procesamiento de solicitudes.
const handleErrors = (error, req, res, next) => {
    const response = {
        error: {
            message: error.message,
            // Si estás en desarrollo, podrías querer ver el stack del error
            ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
        }
    };

    res.status(error.status || 500);
    res.json(response);
};


// Exporta los middlewares para que puedan ser utilizados en otros archivos de la aplicación.
module.exports = { handle404, handleErrors };
