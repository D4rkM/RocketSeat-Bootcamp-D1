const express = require('express');

const server = express();

const port = 3333;

server.use(express.json());

server.use(logRequests);

const projects = [];

let requestsNumber = 0;

function logRequests(req, res, next) {

    requestsNumber++;

    console.log(`${req.url} -> method: ${req.method} -- Request Number: ${requestsNumber}`);

    next();

}

function checkProjectId(req, res, next){

    const { id } = req.params;

    req.projectIndex = projects.findIndex(project => project.id === id);

    if(req.projectIndex === -1) return res.json({error: "Projeto não encontrado"});

    next();
}

server.get("/projects", (req, res) => {

    return res.json(projects);

});

server.get("/projects/:id", checkProjectId, (req, res) => {

    return res.json(projects[req.projectIndex]);

});

server.post("/projects", (req, res) => {

    const { id, title } = req.body;

    projects.push({id, title, tasks: []});

    return res.json(projects);

});

server.post("/projects/:id/tasks", checkProjectId, (req, res) => {

    const { title } = req.body;

    projects[req.projectIndex].tasks.push(title);

    return res.json(projects[req.projectIndex]);

});

server.put("/projects/:id", checkProjectId, (req, res) => {

    const { title } = req.body;

    projects[req.projectIndex].title = title;

    return res.json(projects[req.projectIndex]);

});

server.delete("/projects/:id", checkProjectId, (req, res) => {

    projects.splice(req.projectIndex, 1);

    return res.json(projects);

});


server.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});