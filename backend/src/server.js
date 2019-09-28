const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omniapp:omniapp@omniapp-rugdx.mongodb.net/omniappDb?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser:true
});

server.use(cors());
server.use(express.json());
server.use(routes);

// GET, POST, PUT, DELETE



server.listen(3333);