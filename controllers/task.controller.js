const {Task} = require("../models")

module.exports.createNewTask = async (req, res, next) => {
  const {body:validatedTask} = req;
  const task = await new Task(validatedTask);
  res.status(201).send(task);
}