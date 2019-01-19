const express = require('express');
const logger = require('morgan');
const app = express();
const routes = require('./routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes.init(app);

module.exports = app;
