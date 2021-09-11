require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');

const port = process.env.PORT;

app.use(history({}));
app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});

app.listen(port, () => {
    console.log('Server: http://localhost:' + port + '/');
});