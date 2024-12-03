require('dotenv').config();
const express = require ('express');
const mongoose = require('mongoose');

const Usuario = require('./models/Usuario');


const app = express();
const port = 4000;

app.use(express.json());


//Conectar con Atlas
mongoose.connect('mongodb+srv://johnbecerra:john123@videojuego.0b3ng.mongodb.net/Videojuego?retryWrites=true&w=majority&appName=Videojuego')
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error conectando a MongoDB Atlas', err));


//-------------------------Apis-----------------------------------


// Para insertar los usuarios en MongoDB mediante el POST // ES UN REGISTRO

app.post('/usuarios', async (req, res) => {
    try {
      const nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        edad: req.body.edad
      });
  
      const usuarioGuardado = await nuevoUsuario.save();
      res.status(201).json(usuarioGuardado);
    } catch (err) {
      console.error(err); // Muestra el error en la consola
      res.status(500).json({ mensaje: 'Error al guardar el usuario', error: err.message });
    }


  });
  

  app.get('/usuarios', async (req, res) => {
    try {
    
      const usuario = await Usuario.find();
    if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }res.status(200).json(usuario);
    } catch (err) {
      console.error(err); 
      res.status(500).json({ mensaje: 'Error al buscar el usuario', error: err.message });
    }
});
  




// Para escuchar el puerto
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto:${port}`);
});