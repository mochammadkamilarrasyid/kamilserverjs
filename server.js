// server.js
const express = require('express');
const app = express();
const port = 3000;  // Tentukan port untuk server Anda

// Rute dasar
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use('/api/goals', require("./routes/goalRoutes"))

// Memulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});