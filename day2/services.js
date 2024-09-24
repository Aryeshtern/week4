
const validateMiddleware = (req, res, next) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);
    console.log(user);
    bcrypt.compare(password, user.password, function(err, result) {
        if (result) {
            req.user = user;
            next();
        } else {
            return res.status(401).send({ message: 'Invalid email or password' });
        }
    });
}

module.exports = {
    validateMiddleware
}