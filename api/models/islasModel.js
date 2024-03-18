// api/models/islandModel.js
const pool = require('../../config/database');

// Función para verificar el acceso a una isla
const verifyAccess = async (nombreIsla, codigoVerificacion) => {
    const [rows] = await pool.query('SELECT infoIslaURL FROM InformacionIsla WHERE nombreIsla = ? AND codigoVerificacion = ?', [nombreIsla, codigoVerificacion]);
    return rows.length ? rows[0] : null;
};

module.exports = {
    verifyAccess
};
