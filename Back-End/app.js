const express = require('express');
const cors = require('cors');
const userR = require('./routes/userRoutes');
const db = require('./config/DBConnection');  // Asegúrate de importar la clase que maneja la conexión a la base de datos

const app = express();

// Usar CORS para permitir solicitudes desde cualquier origen
app.use(cors({
  origin: 'https://israel-sg.itch.io'
}));

// Middleware para parsear JSON
app.use(express.json());

// Iniciar la conexión con la base de datos
db.connect();

// Rutas definidas en userR
app.use(userR);

const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
