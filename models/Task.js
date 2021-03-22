const db = new Map();

class Task {
  constructor({body, isDone, userId}) {
    this.body = body
    this.isDone = isDone
    this.userId = userId
    this.taskId = db.size + 1

    db.set(this.taskId, this)
    return Promise.resolve(this)
  }

  async deleteTask () {
    return db.delete(this.taskId)
  }
}

Task.findAllTasksOfUser = async id => {
  const allTasks = [...db.values()];
  return allTasks.map((task)=>{
    if (task.userId === id) {
      return task;
    }
  })
}

Task.deleteTaskbyId = async id => {
  return db.delete(id);
}

Task.updateTask = async (id, body) => {
  const oldTask = db.get(id);
  oldTask.body = body;
  return db.set(id, oldTask);
}

Task.makeDoneUndone = async id => {
  const oldTask = db.get(id);
  oldTask.isDone = !oldTask.isDone;
  return db.set(id, oldTask);
}

module.exports = Task;