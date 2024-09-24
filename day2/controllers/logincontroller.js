const login =  (req, res) => {
    res.status(200).send({ message: 'Logged in successfully' });
    console.log(`POST /login from ${req.ip}`);
};

module.exports = {login};