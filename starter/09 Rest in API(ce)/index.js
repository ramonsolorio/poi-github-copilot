//Consolidate all endpoints in one simple API and make sure all endpoints are connected

// Create a simple API that have two endpoints (get user, get users) that retrieves information about a collection of users and a specific user
const express = require('express');
const app = express();
const port = 3000;

// Mock data
const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a specific user by id
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send('User not found');
    res.json(user);
});

//  
let idCounter = 1;
app.post('/users', (req, res) => {
    const user = req.body;
    user.id = idCounter++;
    users.push(user);
    res.json({ id: user.id, count: users.length });
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        res.json({ success: true });
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
