const express = require('express');
const addon = require('./build/Release/addon'); // Ruta al archivo addon.node

const app = express();
const port = 3000;

console.log(addon.hello());

// Ruta para '/'
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js and C++ Addon API!');
});

// Ruta que usa el addon
app.get('/hello', (req, res) => {
  const message = addon.hello();
  res.send(message);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});