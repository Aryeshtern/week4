const {getAll, getUserById, addUser} = require('../dal')
const { v4: uuidv4 } = require('uuid');
const  bcrypt = require('bcrypt');

const register = async (req, res) => {
    const newUser = req.body;
    if (!newUser.email ||!newUser.password) {
        return res.status(400).send({ message: 'Missing email or password' });
    }
    newUser.id = uuidv4();
    newUser.password = bcrypt.hashSync(newUser.password, 10);

    await addUser(newUser).then((result) => {
        if (result.success){
            res.status(201).send(newUser);
            console.log(`POST /users with body: ${JSON.stringify(newUser)}`);
        }else{
            res.status(500).send({ message: 'Failed to add user' });
        }
    });
}

const getUsers = async (req, res) => {
    const users = await getAll();
    res.status(200).send(users);
    console.log('GET /users');
}

const getUser = async (req, res) => {
    const user = await getUserById(req.params.id);
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user);
    console.log(`GET /users/${req.params.id}`);
}

module.exports = { 
    getUsers,
    getUser,
    register 
};

