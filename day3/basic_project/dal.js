const jsonFile = require('jsonfile');

const path = require('path');

const addUser = async (user) => {
    try{
        const data = await jsonFile.readFileSync(path.join(__dirname, './data.json'));
        const updatedData = data.users.push(user);
        await jsonFile.writeFile(path.join(__dirname, './data.json'), JSON.stringify(updatedData))
        console.log('User added successfully');
        return { success: true, nosucceed: false };
    }catch{
        console.error('Error adding user');
        return { success: false, nosucceed: true };
    }
    
}
const getAll = async (
) => {
    const data = await jsonFile.readFileSync(path.join(__dirname, './data.json'));
    return data.users;
};

const getUserById = async (id) => {
    const data = await jsonFile.readFileSync(path.join(__dirname, './data.json'));
    const user = data.users.find(user => user.id === parseInt(id));
    if (user) {
        return user;
    }else{
        throw new Error('User not found');
    }
}

module.exports = {
    getAll,
    getUserById,
    addUser,
 };


