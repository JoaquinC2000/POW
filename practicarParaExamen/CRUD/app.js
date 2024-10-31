const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const {json} = require('express');
const app = express();

app.use(express.json());
app.use(cors());

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'articulos_db'
});

// Conexión a la database
conexion.connect(function (error) {
    if(error){
        throw error;
    } else {
        console.log("Conexión exitosa a la base de datos!");
    }
})

// Ruta Raíz (de prueba)
app.get('/', (req, res) => {

})

// Mostrar todos los articulos
app.get('/api/articulos', (req, res) => {

})

// Mostrar un solo articulo
app.get('/api/articulos/:id', (req, res) => {

})

// Crear articulo
app.post('/api/articulos', (req, res) => {

})

// Editar articulo
app.put('/api/articulos/:id', (req, res) => {

})

// Eliminar articulo
app.delete('/api/articulos/:id', (req, res) => {

})

const puerto = process.env.PORT || 3000;
app.listen(puerto, function() {
    console.log("Servidor OK en puerto:" + puerto);
})

