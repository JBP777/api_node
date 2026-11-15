const http = require('http');
const os = require('os');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

  const respuesta = {
    empresa: 'Distribuciones Mediterráneo S.L.',
    autor: 'Jesús Barru Petrule',
    mensaje: 'API REST operativa desde contenedor Docker con Node.js',
    contenedor: os.hostname(),
    version_node: process.version,
    fecha: new Date().toISOString()
  };

  res.end(JSON.stringify(respuesta, null, 2));
});

server.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});