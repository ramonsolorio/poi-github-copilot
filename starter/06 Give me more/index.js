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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//npm install
//node index.js
//go to http://localhost:3000/users, http://localhost:3000/users/1