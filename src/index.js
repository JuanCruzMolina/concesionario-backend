/**
 * Servidor principal de la aplicación
 * Configuración del servidor Express con arquitectura MVC
 */
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Importar rutas
const ventasRoutes = require("./routes/ventasRoutes");
const vehiculosRoutes = require("./routes/vehiculosRoutes");

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    message: "API del Concesionario Backend",
    version: "2.0.0",
    endpoints: {
      health: "/api/health",
      ventas: "/api/ventas/:id_venta",
      vehiculos: "/api/vehiculos/:id_vehiculo",
    },
  });
});

// Configurar rutas con prefijo /api
app.use("/api/ventas", ventasRoutes);
app.use("/api/vehiculos", vehiculosRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada",
    path: req.originalUrl
  });
});

// Error handler global
app.use((err, req, res, next) => {
  console.error(`[ERROR] ${err.stack}`);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Error interno del servidor",
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
  console.log(`📍 API disponible en http://localhost:${PORT}`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
