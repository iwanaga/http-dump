const http = require('http');
const PORT = 3000;

/* Use followings if you want to use https
const http = require('https');
const fs = require('fs');
const options = {
  key:  fs.readFileSync('path to secret key'),
  cert: fs.readFileSync('path to server certificate')
};

const server = http.createServer(options, (req, res) => {
*/

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
  res.writeHead(200);
  //res.end();
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(PORT);
