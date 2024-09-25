
const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

const usersR = require('./routes/userR');
const productsR = require('./routes/productsR');
const ordersR = require('./routes/ordersR');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersR);
//app.use('/products', productsR);
//app.use('/orders', ordersR);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




