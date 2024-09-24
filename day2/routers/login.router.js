const express = require('express');
const {login} = require('../controllers/logincontroller');

const {validateMiddleware} = require("../services");

const router = express.Router();

router.post('/login', validateMiddleware, login);

module.exports = router;