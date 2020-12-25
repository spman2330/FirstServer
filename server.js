const http = require('http');
const express = require('express');
const itemsRouter = require('./routes/routes');

const app = express();
app.use(express.json());
app.use('/', itemsRouter);

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);