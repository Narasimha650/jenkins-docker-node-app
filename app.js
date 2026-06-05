const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello mr.mallugari Keerthi sai Renuka kumar !\n');
});
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
