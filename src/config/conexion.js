const mysql = require('mysql');
const conexion = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'',
        port:3306
        database:'tasklist'
    }
);
conexion.connect((err)=>
{
    if(err){
        console.log('la pifiè con conexion' + err)
    }
    else{
        console.log('la base de datos de conectooooo!')
    }
}
);