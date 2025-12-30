# Concesionario Backend API

API REST para la gestión de un concesionario de vehículos.

## Arquitectura

Este proyecto sigue una arquitectura MVC (Model-View-Controller) con separación de responsabilidades en capas:

```
src/
├── index.js                    # Entry point del servidor
├── routes/                     # Definición de endpoints HTTP
│   ├── vehiculosRoutes.js
│   ├── ventasRoutes.js
│   └── validaciones/          # Validaciones con Joi
│       ├── ValidacionBase.js
│       ├── vehiculos/
│       │   └── ValidacionesVehiculos.js
│       └── ventas/
│           └── ValidacionesVentas.js
├── controllers/                # Manejo de requests/responses
│   ├── vehiculosController.js
│   └── ventasController.js
└── services/                   # Lógica de negocio
    ├── vehiculos/
    │   ├── vehiculosService.js
    │   └── queries/
    │       └── getVehiculoById.js
    └── ventas/
        ├── ventasService.js
        └── queries/
            └── getVentaById.js
```

### Capas

1. **ROUTES** (`src/routes/`)
   - Define endpoints HTTP y aplica middlewares
   - Conecta validaciones con controllers
   - Ejemplo: `GET /api/vehiculos/:id_vehiculo`

2. **CONTROLLERS** (`src/controllers/`)
   - Maneja peticiones HTTP (req/res)
   - Extrae parámetros y delega a services
   - Manejo de errores con try/catch + next()

3. **SERVICES** (`src/services/`)
   - Contiene la lógica de negocio
   - Estructura de 2 niveles:
     - Clase organizadora (`vehiculosService.js`)
     - Funciones específicas por carpetas (`queries/`)

4. **VALIDACIONES** (`src/routes/validaciones/`)
   - Valida datos de entrada con Joi
   - Extiende `ValidacionBase`
   - Schemas para body, params y query

## Endpoints

### Health Check
```bash
GET /api/health
```

### Vehículos
```bash
GET /api/vehiculos/:id_vehiculo
```

### Ventas
```bash
GET /api/ventas/:id_venta
```

## Scripts

```bash
# Iniciar servidor en producción
npm start

# Iniciar servidor en modo desarrollo (con watch)
npm run dev

# Ejecutar tests
npm test
```

## Variables de Entorno

```env
PORT=3000
NODE_ENV=development
```

## Docker

### Build
```bash
docker build -t concesionario-backend:latest .
```

### Run
```bash
docker run -p 3000:3000 concesionario-backend:latest
```

## CI/CD

El proyecto está configurado para CI/CD con GitLab:

- **Pipeline**: `.gitlab-ci.yml`
- **Stages**: build, deploy
- **Trigger**: Git tags
- **Registry**: `registry.gitlab.com/7incho/concesionario-backend`

### Crear un release

```bash
# Crear y pushear un tag
git tag v1.0.0
git push origin v1.0.0
```

Esto dispara automáticamente:
1. Build de la imagen Docker
2. Push al registry de GitLab
3. Actualización del deployment en Kubernetes

## Validaciones

Todos los endpoints tienen validación de entrada con Joi:

```bash
# Ejemplo de error de validación
curl http://localhost:3000/api/vehiculos/abc

{
  "success": false,
  "message": "Error de validación",
  "errors": [
    {
      "campo": "id_vehiculo",
      "mensaje": "El ID del vehículo debe ser un número",
      "tipo": "params"
    }
  ]
}
```

## Estructura de Respuestas

### Éxito
```json
{
  "success": true,
  "data": { ... }
}
```

### Error
```json
{
  "success": false,
  "message": "Mensaje de error",
  "errors": [ ... ]
}
```

## Desarrollo

### Agregar un nuevo módulo

1. **Crear service** (`src/services/miModulo/`)
   - Clase organizadora: `miModuloService.js`
   - Funciones específicas en subcarpetas

2. **Crear controller** (`src/controllers/miModuloController.js`)
   - Funciones async que manejan req/res
   - Llaman a services

3. **Crear validaciones** (`src/routes/validaciones/miModulo/`)
   - Extender `ValidacionBase`
   - Definir schemas con Joi

4. **Crear routes** (`src/routes/miModuloRoutes.js`)
   - Definir endpoints
   - Aplicar validaciones
   - Conectar con controllers

5. **Registrar en `src/index.js`**
   ```javascript
   const miModuloRoutes = require("./routes/miModuloRoutes");
   app.use("/api/mi-modulo", miModuloRoutes);
   ```

## Tecnologías

- Node.js 20
- Express 5
- Joi (validaciones)
- Docker
- GitLab CI/CD
- Kubernetes

## Licencia

ISC
