/**
 * Service de Vehículos
 * Clase organizadora de la lógica de negocio de vehículos
 */
const getVehiculoByIdQuery = require("./queries/getVehiculoById");

class VehiculosService {
  /**
   * Obtiene un vehículo por su ID
   * @param {Number} id_vehiculo - ID del vehículo
   * @returns {Object} Datos del vehículo
   */
  static async getVehiculoById(id_vehiculo) {
    try {
      return await getVehiculoByIdQuery(id_vehiculo);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = VehiculosService;
