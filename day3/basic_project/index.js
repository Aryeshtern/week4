const express = require('exports');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, console.log('the server listening on port ' + port));



