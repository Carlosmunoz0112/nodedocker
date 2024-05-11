const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Santiago Zapata Ospina');
});

app.listen(3000, () => {
  console.log('Servidor Express corriendo en el puerto 3000');
});
