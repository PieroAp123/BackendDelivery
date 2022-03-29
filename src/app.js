var mysql = require('mysql');  //Require para importar la libreria

var conexion = mysql.createConnection({
    host: '127.0.0.1',
    database: 'bd_appdelivery',
    user: 'root',
    password: 'password'
});

conexion.connect(function(error){
    if(error) {
        console.log(error);
        throw error;
    } else {
        console.log('Conexión Exitosa');
    }
})
module.exports = conexion;