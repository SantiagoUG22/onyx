# Etapa 1: Build del Frontend con Node.js
FROM node:18-alpine AS build

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código del frontend
COPY . .

# Generar el build de producción con Vite
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine

# Copiar el build del frontend
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar la configuración de Nginx (opcional, pero recomendada)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
