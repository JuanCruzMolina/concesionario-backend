/**
 * Controller de Ventas
 * Maneja las peticiones HTTP relacionadas con ventas
 */
const VentasService = require("../services/ventas/ventasService");

/**
 * Obtiene una venta por su ID
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 */
const getVentaById = async (req, res, next) => {
  try {
    const { id_venta } = req.params;

    const result = await VentasService.getVentaById(
      parseInt(id_venta)
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
  getVentaById,
};
