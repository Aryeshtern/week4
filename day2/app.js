const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const  bcrypt = require('bcrypt');
const { router } = require('./routers/login.router');
const port = process.env.PORT || 3000;

const users = [
    { id: 1, email: 'foo1@bar.com', password: '1234'},
    { id: 2, email: 'foo2@bar.com', password: '1234'},
    { id: 3, email: 'foo3@bar.com', password: '1234'}
];

app.use(express.json());

app.use(router);

app.get('/users', (req, res) => {

    res.status(200).send(users);
    console.log(`GET /users from ${req.ip}`);
}
);

app.post('/users', (req, res) => {
    const newUser = req.body;
    if (!newUser.email ||!newUser.password) {
        return res.status(400).send({ message: 'Missing email or password' });
    }
    newUser.id = uuidv4();
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    users.push(newUser);
    res.status(201).send(newUser);
    console.log(`POST /users with body: ${JSON.stringify(newUser)} from ${req.ip}`);

});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user);
    console.log(`GET /users/${id} from ${req.ip}`);
});

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).send({ message: 'User not found' });
    }
    users[userIndex] = {...users[userIndex],...updatedUser };
    res.status(200).send(users[userIndex]);
    console.log(`PUT /users/${id} with body: ${JSON.stringify(updatedUser)} from ${req.ip}`);
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).send({ message: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
    console.log(`DELETE /users/${id} from ${req.ip}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




