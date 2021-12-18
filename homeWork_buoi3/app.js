const express = require('express');
const app = express();
const studentRouter = require('./studentRoutes');
const bodyParser = require('body-parser');

app.listen(3000);

// middleware
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', studentRouter);