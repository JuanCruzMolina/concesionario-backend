/**
 * Servidor principal de la aplicación
 * Configuración del servidor Express con arquitectura MVC
 */

const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutas
const ventasRoutes = require("./routes/ventasRoutes");
const vehiculosRoutes = require("./routes/vehiculosRoutes");

// Configurar rutas
app.use("/ventas", ventasRoutes);
app.use("/vehiculos", vehiculosRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    message: "API del Concesionario Backend",
    endpoints: {
      ventas: "/ventas/:id_venta",
      vehiculos: "/vehiculos/:id_vehiculo",
    },
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada",
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Error interno del servidor",
    error: err.message,
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  console.log(`API disponible en http://localhost:${PORT}`);
});

module.exports = app;
