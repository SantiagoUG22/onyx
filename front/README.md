# ONYX EVENTS - Plataforma de Gestión de Cotizaciones

Este es el proyecto de ONYX EVENTS, una plataforma moderna para la gestión de servicios de DJ y producción de eventos.

## 🚀 Despliegue con Docker (VPS)

Si tienes Docker y Docker Compose instalados en tu VPS, el despliegue es muy sencillo:

1. **Generar el Build del Frontend**:
   En tu máquina local (o en el VPS si tienes Node):
   ```bash
   npm run build
   ```
   Esto generará la carpeta `dist/`.

2. **Levantar los Contenedores**:
   Ejecuta el siguiente comando para levantar el backend y el servidor web (Nginx) para el frontend:
   ```bash
   docker-compose up -d --build
   ```

3. **Persistencia de Datos**:
   La base de datos se guarda en `server/db.json`. El `docker-compose.yml` ya tiene un volumen configurado para que los datos no se pierdan al reiniciar los contenedores.

## 🛠️ Estructura del Proyecto

- `src/`: Frontend en React + Vite + Tailwind CSS.
- `server/`: Backend en Node.js (Express + LowDB).
- `Dockerfile.backend`: Configuración para empaquetar el servidor.
- `docker-compose.yml`: Orquestación de servicios (Frontend + Backend).

## 💻 Desarrollo Local

1. Instalar dependencias: `npm install`
2. Correr frontend: `npm run dev`
3. Correr backend: `npm run server`

---
Diseñado para la excelencia en eventos. 💎
