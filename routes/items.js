const express = require("express");
const router = express.Router();

const items = [];

router.get('/', (req, res) => {
    res.json(items);
});

router.post('/', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedItem = req.body;

    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items[index] = { id, ...updatedItem };
        res.json(items[index]);
    } else {
        res.status(404).json({error: 'Item não encontrado'});
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        res.json({ message: 'Item removido com sucesso' })
    } else {
        res.status(404).json({ error: 'Item não encontrado' });
    }
});

module.exports = router;