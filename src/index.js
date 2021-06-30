const http = require('http');

const config = require('./config');
const routers = require('./routers');

const httpServer = http.createServer((req, res) => {
  return routers(req, res);
});

httpServer.listen(config.port, () => {
  console.log(`The server is listening on port ${config.port}`);
});