//creamos conexión
const mysql = require('mysql2');


//
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'demo'
})

//comprobamos conexión
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
    } else {
        console.log('Conectado a MySQL (DEMO)');
    }
});

module.exports = connection;
