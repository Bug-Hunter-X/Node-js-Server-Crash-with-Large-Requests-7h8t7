const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    res.writeHead(200);
    res.end(body);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});