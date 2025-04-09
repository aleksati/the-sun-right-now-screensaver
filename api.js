const express = require('express');
const cors = require('cors');
const app = express();
const port = 8001;

app.use(cors());

app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/api/echo', (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(port, () => {
  console.log(`Local API listening at http://localhost:${port}`);
});