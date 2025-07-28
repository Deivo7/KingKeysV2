FROM node:18-alpine

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Exponer el puerto de desarrollo (Vite usa 5173 por defecto, pero tú usas 8080)
EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host"]