const port = process.env.PORT || 3333;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/tindev', { useNewUrlParser: true });

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})