# Usamos una imagen base oficial ligera de Node.js
FROM node:20-alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y los archivos de la aplicación al contenedor
COPY package.json app.js ./

# Instalamos las dependencias definidas en package.json
RUN npm install

# Exponemos el puerto 3000 en el que escucha la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación al arrancar el contenedor
CMD ["npm", "start"]