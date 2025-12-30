/**
 * Controller de Vehículos
 * Maneja las peticiones HTTP relacionadas con vehículos
 */
const VehiculosService = require("../services/vehiculos/vehiculosService");

/**
 * Obtiene un vehículo por su ID
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 */
const getVehiculoById = async (req, res, next) => {
  try {
    const { id_vehiculo } = req.params;

    const result = await VehiculosService.getVehiculoById(
      parseInt(id_vehiculo)
    );

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getVehiculoById,
};
