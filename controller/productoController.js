const { findById } = require('../models/Producto');
const Producto = require('../models/Producto');

exports.crearProducto = async (req, res) =>{
    try {
        let producto;

        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.consultarProductos = async (req, res) =>{
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.actualizarProductos = async (request, response) =>{
    try {
        const { nombre, categoria, ubicacion, precio } = request.body;
        let producto = await Producto.findById(request.params.id);

        if (!producto) {
            response.status(404).json({msg: 'No existe el producto'});
        } 
            producto.nombre = nombre;
            producto.categoria = categoria;
            producto.ubicacion = ubicacion;
            producto.precio = precio;

            producto = await Producto.findByIdAndUpdate({ _id: request.params.id }, producto, {new: true})
            response.json(producto);
        
    } catch (error) {
        console.log(error);
        response.status(500).send('hubo un error');
    }
}


exports.consultarProductos = async (req, res) =>{
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.obtenerProducto = async (request, response) =>{
    try {
      
        let producto = await Producto.findById(request.params.id);

        if (!producto) {
            response.status(404).json({msg: 'No existe el producto'});
        } 
            response.json(producto);
        
    } catch (error) {
        console.log(error);
        response.status(500).send('hubo un error');
    }
}

exports.eliminarProducto = async (request, response) =>{
    try {
      
        let producto = await Producto.findById(request.params.id);

        if (!producto) {
            response.status(404).json({msg: 'No existe el producto'});
        } 
            await Producto.findByIdAndRemove({ _id: request.params.id})
            response.json({ msg: 'Producto eliminado correctamente' });
        
    } catch (error) {
        console.log(error);
        response.status(500).send('hubo un error');
    }
}