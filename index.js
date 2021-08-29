const { request, response } = require('express');
const express = require('express');
const conectarBD = require('./config/db')
const cors = require('cors');
 //Creamos nuestro servidor
 const app = express();

 //Conectamos a la BD
 conectarBD();
app.use(cors());

 app.use(express.json());

 app.use('/api/productos', require('./routes/producto'));

 //Definimos la ruta principal
 app.get('/', (req, resp) =>{
    resp.send('Hola mundo');
 })

app.listen(4000, () =>{
    console.log('Server successfully')
})