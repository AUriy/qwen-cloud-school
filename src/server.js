const express = require('express');
const app = express();
const PORT = 3070;

app.get('/', (req, res) => {
  res.send('<h1>Привет! Это мой первый MVP.</h1><p>Сервер работает в GitHub Codespaces!</p>');
});

app.listen(PORT, () => {
  console.log();
});

