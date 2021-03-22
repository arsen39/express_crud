const {Task} = require("../models")

module.exports.createNewTask = async (req, res, next) => {
  const {body:validatedTask} = req;
  const task = await new Task(validatedTask);
  res.status(201).send(task);
}

module.exports.getAllTasksOfUser = async (req, res, next) => {
  const {body:{userId}} = req;
  try {
    const taskRes = await Task.findAllTasksOfUser(userId)
    res.status(200).send(taskRes);
  } catch (error) {
    res.status(400).send(error);
  }
  
}

module.exports.deleteTask = async (req, res, next) => {
  const {params} = req;
  try {
    const taskRes = await Task.deleteTaskbyId(Number(params.taskId))
    res.status(200).send(taskRes);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports.updateTask = async (req, res, next) => {
  const {body, params} = req;
  try {
    await Task.updateTask(Number(params.taskId), body.body);
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports.doneUndoneTask = async (req, res, next) => {
  const {params} = req;
  try {
    await Task.makeDoneUndone(Number(params.taskId));
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
}
