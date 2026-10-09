//Importamos la conexión del pool bd.js
const db = require('../config/db');


exports.getAll = (callback) => {
    db.query('SELECT * FROM personas', callback);
};

exports.getById = (id, callback) => {
    db.query('SELECT * FROM personas WHERE id = ?', [id], callback);
};

exports.create = (persona, callback) => {
    db.query(
        'INSERT INTO personas (tipoDocumento, numeroDocumento, nombres, apellidos, fechaNacimiento, correo, direccion, ciudad, telefono)VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
            persona.tipoDocumento, 
            persona.numeroDocumento, 
            persona.nombres, 
            persona.apellidos, 
            persona.fechaNacimiento, 
            persona.correo, 
            persona.direccion, 
            persona.ciudad, 
            persona.telefono
        ],
        callback
    );
};

exports.update = (id, persona, callback) => {
    db.query(
        'UPDATE personas SET tipoDocumento=?, numeroDocumento=?, nombres=?, apellidos=?, fechaNacimiento=?, correo=?, direccion=?, ciudad=?, telefono=? WHERE id_persona=?',
        [
            persona.tipoDocumento, 
            persona.numeroDocumento, 
            persona.nombres, 
            persona.apellidos, 
            persona.fechaNacimiento, 
            persona.correo, 
            persona.direccion, 
            persona.ciudad, 
            persona.telefono, 
            id
        ],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query('DELETE FROM personas WHERE id_persona=?', [id], callback);
};
