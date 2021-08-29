//Rutas para el producto
const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');

// api/productos
router.post('/', productoController.crearProducto); 
router.get('/', productoController.consultarProductos);
router.put('/:id', productoController.actualizarProductos);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;