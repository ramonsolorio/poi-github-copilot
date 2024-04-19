//Create a simple API that have one endpoint (insert user) that receives information about a users and retrieves a generated id and the count of users inserted

const express = require('express');
const app = express();
app.use(express.json());

let users = [];
let idCounter = 1;

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = idCounter++;
    users.push(user);
    res.json({ id: user.id, count: users.length });
});

app.listen(3000, () => console.log('Server running on port 3000'));

//npm install
//node index.js

//Sample usage:
//curl -X POST -H "Content-Type: application/json" -d "{\"name\":\" User 1\"}" http://localhost:3000/users