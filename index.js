const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  console.log(Object.keys(req.headers).map(key => `${key}: ${req.headers[key]}`).join('\n'));

  req.on('data', (chunk) => {
    console.log(chunk.toString());
  });
  req.on('close', () => {
    console.log('(connection closed)');
    req.destroy();
  });
  //res.end();
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000);
