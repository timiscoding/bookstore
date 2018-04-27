const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.write('hello');
  res.end();
});

server.listen(3000);
