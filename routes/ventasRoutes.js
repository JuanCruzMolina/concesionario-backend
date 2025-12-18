/**
 * Rutas de Ventas
 * Define los endpoints relacionados con ventas
 */

const express = require("express");
const router = express.Router();
const ventasController = require("../controllers/ventasController");

/**
 * GET /ventas/:id_venta
 * Obtiene una venta por su ID
 */
router.get("/:id_venta", ventasController.getVentaById);

module.exports = router;
