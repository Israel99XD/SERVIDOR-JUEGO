require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

module.exports = {
  url: process.env.MONGO_URI  // Usar la URL de MongoDB desde el archivo .env
};
