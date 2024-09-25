const {Router} = require('express');

const router = Router();

const {getUsers, getUser, register} = require('../controllers/users.controller')

router.get('', getUsers)

router.get('/:id', getUser);

router.post('', register)

router.put('/:id', )

router.delete('/:id', )

module.exports = router;