const http = require('http');

const GREETING = process.env.GREETING;
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${GREETING}`);
});

server.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});