const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const http = require('http');

app
  .prepare()
  .then(() => {
    const server = express();
    const httpServer = http.createServer(server);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    httpServer.listen(port, () =>
      console.log(`app listening on port ${port}!`)
    );
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
