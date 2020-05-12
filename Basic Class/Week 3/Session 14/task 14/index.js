const express = require('express');
const app = express();
const router = require('./router.js');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})
