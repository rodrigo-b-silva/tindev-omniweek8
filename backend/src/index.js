const port = process.env.PORT || 3333;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors());

const connectedUsers = {};
io.on('connection', socket => {
    const { user } = socket.handshake.query;
    console.log(user, socket.id);

    connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb://localhost:27017/tindev', { useNewUrlParser: true });

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

server.listen(port, () => {
    console.log(`App running on port ${port}`)
})