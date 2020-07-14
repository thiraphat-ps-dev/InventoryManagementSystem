// server.js
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const next = require('next');
const compression = require('compression');
dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.NODE_PORT || 3000;
app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression()); // ดูตรงนี้ครับ

    server.get('*', (req, res) => handle(req, res));
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
