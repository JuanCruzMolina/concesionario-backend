# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar solo dependencias de producción
RUN npm ci --omit=dev

# Production stage
FROM node:20-alpine

WORKDIR /app

# Crear usuario no-root
RUN addgroup -g 1001 nodejs && \
    adduser -D -u 1001 -G nodejs nodejs

# Copiar node_modules desde build stage
COPY --from=build /app/node_modules ./node_modules

# Copiar código fuente
COPY . .

# Cambiar permisos
RUN chown -R nodejs:nodejs /app

# Cambiar a usuario no-root
USER nodejs

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["node", "src/index.js"]
