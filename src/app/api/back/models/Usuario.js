const mongoose = require('mongoose');

//esquema
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  edad: { type: Number, required: true }
});

// Creacion del modelo con la coleccion
const Usuario = mongoose.model('Usuario', usuarioSchema, 'usarios');

module.exports = Usuario;
