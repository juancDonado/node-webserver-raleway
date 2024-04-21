const http = require('http');

http.createServer((req, res) => {

  res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  res.writeHead(200, { 'Content-Type': 'application/csv' });

  const persona = {
    id: 1,
    name: 'Juan'
  }

  // res.write(JSON.stringify(persona));
  res.write('id, nombre');

  res.end();
})
  .listen(8080);
