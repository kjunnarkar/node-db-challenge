const express = require('express');
const Projects = require('./projects-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const results = await Projects.getProjects();
        results.forEach(project => project.Completed ? project.Completed = true : project.Completed = false)
        res.status(200).json(results);
    }
    catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const results = await Projects.getProjectById(id);
        if (results) {
            results.forEach(project => project.Completed ? project.Completed = true : project.Completed = false)
            res.status(200).json(results);
        }
        else {
            res.status(404).json({ message: 'Invalid id' });
        }
    }
    catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const body = req.body;
    
    try {
        const added = await Projects.addProject(body);
        res.status(201).json({ message: 'Successfully added project', added });
    }
    catch (error) {
        next(error);
    }
});

router.get('/resource', async (req, res, next) => {

    try {
        const results = await Projects.getResources();
        res.status(200).json(results);
    }
    catch (error) {
        next(error);
    }
});

router.get('/:id/resource', async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const results = await Projects.getProjectResources(id);
        if (results) {
            res.status(200).json(results);
        }
        else {
            res.status(404).json({ message: 'Invalid id' });
        }
    }
    catch (error) {
        next(error);
    }
});

router.post('/resource', async (req, res, next) => {
    const body = req.body;
    
    try {
        const added = await Projects.addResource(body);
        res.status(201).json({ message: 'Successfully added resource', added });
    }
    catch (error) {
        next(error);
    }
});

router.get('/:id/task', async (req, res, next) => {
    const { id } = req.params;

    try {
        const results = await Projects.getProjectTask(id);
        if (results) {
            results.forEach(task => task.Completed ? task.Completed = true : task.Completed = false)
            res.status(200).json(results);
        }
        else {
            res.status(404).json({ message: 'Invalid id' })
        }
    }
    catch (error) {
        next(error);
    }
});

router.post('/:id/task', async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    body.Project = id;
    
    try {
        const added = await Projects.addProjectTask(body, id);
        if (added) {
        res.status(201).json({ message: 'Successfully added task', added });
        }
        else {
            res.status(404).json({ message: 'Invalid id' })
        }
    }
    catch (error) {
        next(error);
    }
});


const errorHandler = ((error, req, res, next) => {
    res.status(500).json({ error: 'Server error: check data or id before retrying' });
    next();
});

router.use(errorHandler);

module.exports = router;
