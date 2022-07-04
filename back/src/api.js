const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

const router = require('./routes/index');
const middleware = require('./middlewares/errorMiddleware');

app.use(cors());
app.use(router);
app.use(middleware.errorMiddleware);

module.exports = app;
