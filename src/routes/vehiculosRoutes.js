/**
 * Rutas de Vehículos
 * Define los endpoints relacionados con vehículos
 */
const express = require("express");
const router = express.Router();
const vehiculosController = require("../controllers/vehiculosController");
const ValidacionesVehiculos = require("./validaciones/vehiculos/ValidacionesVehiculos");

/**
 * GET /vehiculos/:id_vehiculo
 * Obtiene un vehículo por su ID
 */
router.get(
  "/:id_vehiculo",
  ValidacionesVehiculos.validate("getVehiculoByIdSchema"),
  vehiculosController.getVehiculoById
);

module.exports = router;
