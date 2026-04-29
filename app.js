const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
    <h1>Eólica Naranco S.L.</h1>
    <p>Sistema de gestión del parque eólico</p>
    <p>Aerogeneradores activos: 12</p>
    <p>Servidor funcionando correctamente ✅</p>
  `);
});

server.listen(8080, () => {
  console.log('Servidor arrancado en puerto 8080');
});
