require('dotenv').config()
const express = require('express');
const ruta = express.Router();
const cProd = require('../controladores/productos')

ruta.get('/productos', cProd.productos);
ruta.get("/productos/:codigo", cProd.producto)

module.exports = ruta