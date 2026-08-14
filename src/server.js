const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Раздаем статические файлы из папки public
app.use(express.static(path.join(__dirname, '../public')));

// Главный маршрут
app.get('/', (req, res) => {
  res.send(`
    <h1>Привет, Akimov Uriy! 🚀</h1>
    <p>Это твой первый MVP, запущенный в облаке.</p>
    <p>Сервер работает успешно!</p>
  `);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
