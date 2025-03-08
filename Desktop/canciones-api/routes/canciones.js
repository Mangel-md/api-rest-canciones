const express = require('express');
const router = express.Router();
const { Cancion } = require('../models');

router.get('/', async (req, res) => {
    const canciones = await Cancion.findAll();
    res.json(canciones);
});

router.post('/', async (req, res) => {
    const cancion = await Cancion.create(req.body);
    res.json(cancion);
});

router.put('/:id', async (req, res) => {
    await Cancion.update(req.body, { where: { id: req.params.id } });
    res.send('Canción actualizada');
});

router.delete('/:id', async (req, res) => {
    await Cancion.destroy({ where: { id: req.params.id } });
    res.send('Canción eliminada');
});

module.exports = router;