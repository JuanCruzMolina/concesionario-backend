/**
 * Query para obtener una venta por ID
 * TODO: Implementar conexión a base de datos
 */

/**
 * Obtiene una venta por su ID
 * @param {Number} id_venta - ID de la venta
 * @returns {Object} Datos de la venta
 */
async function getVentaById(id_venta) {
  // TODO: Aquí se implementaría la lógica para obtener la venta de la base de datos
  // Por ahora, retornamos datos de ejemplo

  const venta = {
    id_venta: id_venta,
    fecha: new Date().toISOString(),
    cliente: "Cliente ejemplo",
    vehiculo_id: 1,
    monto: 50000,
    estado: "completada",
  };

  return venta;
}

module.exports = getVentaById;
