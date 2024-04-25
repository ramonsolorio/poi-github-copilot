// server.js
const express = require('express');
const app = express();

app.use(express.json());

let cats = [];

app.get('/cats', (req, res) => {
    res.json(cats);
});

app.post('/cats', (req, res) => {
    cats.push(req.body);
    res.json({ message: 'Cat added successfully' });
});

app.delete('/cats/:name', (req, res) => {
    cats = cats.filter(cat => cat.name !== req.params.name);
    res.json({ message: 'Cat deleted successfully' });
});

app.get('/cats/:name', (req, res) => {
    const cat = cats.find(cat => cat.name === req.params.name);
    res.json(cat);
});

app.listen(3000, () => console.log('Server is running on port 3000'));

// Usage:
// curl http://localhost:3000/cats