const db = require('../data/db-config');

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getResources,
    getProjectResources,
    addResource,
    addProjectResource,
    getTasks,
    getProjectTask,
    addProjectTask
}

function getProjects () {
    return db('projects');
}

function getProjectById (id) {
    return db('projects').where({ id });
}

function addProject (body) {
    return db('projects').insert(body);
}

function getResources () {
    return db('resource');
}

function getProjectResources (id) {
    return db('project_resources')
    .join('resource', 'project_resources.id', 'resource.id')
    .where('project_resources.Project', id)
}

function addResource (body) {
    return db('resource').insert(body);
}

function addProjectResource (body, id) {
    return db('project_resources').insert(body).where({ id });
}

function getTasks () {
    return db('task');
}

function getProjectTask (id) {
    return db('task')
    .join('projects', 'projects.id', 'task.Project')
    .where('task.Project', id)
    .select('projects.Name', 'projects.Description', 'task.Description', 'task.Notes', 'task.Completed', 'task.Project')
}

function addProjectTask (body, id) {
    return db('task').insert(body).where({ id });
}