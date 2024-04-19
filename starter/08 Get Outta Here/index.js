// Create a simple API that have one endpoint (remove user) that receives id from a user list
const express = require('express');
const app = express();
app.use(express.json());

let users = [];
let idCounter = 1;

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

app.listen(3000, () => console.log('Server running on port 3000'));

//npm install
//node index.js

//Sample usage:
//curl -X DELETE http://localhost:3000/users/1

