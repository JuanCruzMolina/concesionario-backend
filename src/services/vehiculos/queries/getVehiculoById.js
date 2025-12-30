/**
 * Query para obtener un vehículo por ID
 * TODO: Implementar conexión a base de datos
 */

/**
 * Obtiene un vehículo por su ID
 * @param {Number} id_vehiculo - ID del vehículo
 * @returns {Object} Datos del vehículo
 */
async function getVehiculoById(id_vehiculo) {
  // TODO: Aquí se implementaría la lógica para obtener el vehículo de la base de datos
  // Por ahora, retornamos datos de ejemplo

  const vehiculo = {
    id_vehiculo: id_vehiculo,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2023,
    precio: 50000,
    color: "Blanco",
    estado: "disponible",
  };

  return vehiculo;
}

module.exports = getVehiculoById;
