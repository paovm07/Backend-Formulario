const personaService = require('../services/persona.service');

exports.getAll = (req, res) => {
    personaService.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getById = (req, res) => {
    personaService.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
};

exports.create = (req, res) => {
    personaService.create(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        // Usamos id_persona para que coincida con el nombre en tu base de datos
        res.json({ id_persona: result.insertId, ...req.body }); 
    });
};

exports.update = (req, res) => {
    personaService.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ mensaje: 'Persona actualizada exitosamente' });
    });
};

exports.delete = (req, res) => {
    personaService.delete(req.params.id, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ mensaje: 'Persona eliminada exitosamente' });
    });
};