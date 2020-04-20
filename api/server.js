const express = require('express');
const morgan = require('morgan');

const ProjectsRouter = require('./projects-router');

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use('/api/projects', ProjectsRouter);

server.get('/', (req, res) => {
    res.send('Projects API is running');
});

module.exports = server;
