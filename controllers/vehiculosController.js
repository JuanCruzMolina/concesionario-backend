/**
 * Controlador de Vehículos
 * Maneja las operaciones relacionadas con vehículos
 */

/**
 * Obtiene un vehículo por su ID
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const getVehiculoById = (req, res) => {
  try {
    const { id_vehiculo } = req.params;

    // Validar que el ID esté presente
    if (!id_vehiculo) {
      return res.status(400).json({
        success: false,
        message: "El ID de vehículo es requerido",
      });
    }

    // TODO: Aquí se implementaría la lógica para obtener el vehículo de la base de datos
    // Por ahora, retornamos una respuesta de ejemplo
    const vehiculo = {
      id_vehiculo: id_vehiculo,
      marca: "Toyota",
      modelo: "Corolla",
      año: 2023,
      precio: 50000,
      color: "Blanco",
      estado: "disponible",
    };

    res.status(200).json({
      success: true,
      data: vehiculo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener el vehículo",
      error: error.message,
    });
  }
};

module.exports = {
  getVehiculoById,
};
