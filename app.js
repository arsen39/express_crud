const express = require("express");
const {validateBody} = require("./middleware/validate.mw");
const {validateId} = require("./middleware/validateId.mw");
const TaskController = require("./controllers/task.controller");
const PORT = 3000;
const app = express();


const bodyParser = express.json();

app.post('/newTask', bodyParser, validateBody, TaskController.createNewTask);
app.get('/getAllTasks/user/:userId', validateId, TaskController.getAllTasksOfUser);
app.delete('/deleteTask/taskId/:taskId', TaskController.deleteTask);
app.patch('/updateTask/taskId/:taskId', bodyParser, TaskController.updateTask);
app.patch('/doneUndoneTask/taskId/:taskId',  TaskController.doneUndoneTask);

app.listen(PORT);
