const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Conrtoll-Allow-Origin', '*');
    res.setHeader('Access-Conrtoll-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Conrtoll-Allow-Headers', 'Content-Type', 'Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);