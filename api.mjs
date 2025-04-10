// const express = require('express');
// const cors = require('cors');

import express from "express"
import cors from "cors"

const app = express();
const port = 8001;

app.use(cors());

app.use(express.json());

let count = 0;

app.get('/api/ping', (req, res) => {
  count = count + 1;
  res.json({ message: count });
});

const server = app.listen(port, () => {
  console.log(`Local API listening at http://localhost:${port}`);
});

// gracefully closing the server when .exe is quit or interuppted
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('HTTP server closed.');
  });
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('HTTP server closed.');
  });
});