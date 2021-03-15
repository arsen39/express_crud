const express = require("express");
const {validateBody} = require("./middleware/validate.mw");
const {createNewTask} = require("./controllers/task.controller");
const PORT = 3000;
const app = express();


const bodyParser = express.json();

app.post('/newTask', bodyParser, validateBody, createNewTask);


app.listen(PORT);
