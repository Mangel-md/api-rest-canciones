require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const cancionesRouter = require('./routes/canciones');
app.use('/canciones', cancionesRouter);

// ✅ Agregar una ruta para "/"
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de canciones!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
