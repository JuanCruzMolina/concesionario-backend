/**
 * Service de Ventas
 * Clase organizadora de la lógica de negocio de ventas
 */
const getVentaByIdQuery = require("./queries/getVentaById");

class VentasService {
  /**
   * Obtiene una venta por su ID
   * @param {Number} id_venta - ID de la venta
   * @returns {Object} Datos de la venta
   */
  static async getVentaById(id_venta) {
    try {
      return await getVentaByIdQuery(id_venta);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = VentasService;
