const http = require('http');

const server = http.createServer((req, res) => {
  // This line throws an error if the request is very large
  const data = [];
  req.on('data', chunk => {
    data.push(chunk);
  });
  req.on('end', () => {
    const buffer = Buffer.concat(data);
    const body = buffer.toString();
    res.writeHead(200);
    res.end(body);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});