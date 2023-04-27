const express = require('express');
const cors = require('cors');
const { Home, HistRecords } = require('../routes')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', Home);
app.use('/records', HistRecords)

module.exports = app