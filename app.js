const express = require('express');
const cors = require('cors'); // Importamos cors para que el frontend pueda conectarse
const app = express();

// Middlewares (Permiten recibir JSON y conectar con el Frontend)
app.use(cors()); 
app.use(express.json());

// Importar y usar las rutas de persona
const personaRoutes = require('./routes/persona.routes');
app.use('/personas', personaRoutes);

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});