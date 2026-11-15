const http = require('http');
const os = require('os');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bienvenido a la API de Distribuciones Mediterráneo S.L. - Desarrollado por Jesús\n');
  } else if (req.url === '/estado') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    const estado = {
      servicio: 'api_node - Distribuciones Mediterráneo S.L.',
      hostname: os.hostname(),
      uptime_segundos: Math.round(process.uptime()),
      fecha: new Date().toISOString()
    };
    res.end(JSON.stringify(estado, null, 2));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});

server.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});