const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const itemRoutes = require('./routes/items');

app.use('/items', itemRoutes);

app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});