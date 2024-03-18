// Cambiar la referencia al modelo de productos por el de islas
const IslandModel = require('../models/islasModel');

// Ejemplo de función para verificar el acceso a una isla
const verifyAccess = async (req, res, next) => {
    try {
        const { nombreIsla, codigoVerificacion } = req.body; // Asumiendo que recibes el nombre de la isla y el código en el cuerpo de la solicitud
        const accessInfo = await IslandModel.verifyAccess(nombreIsla, codigoVerificacion);
        if (accessInfo) {
            res.json({ acceso: true, infoIslaURL: accessInfo.infoIslaURL });
        } else {
            res.status(404).json({ message: 'Acceso denegado o isla no encontrada' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    verifyAccess
};
