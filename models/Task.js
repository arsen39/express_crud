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

  async makeDoneUndone () {
    const oldTask = db.get(this.taskId);
    oldTask.isDone = !oldTask.isDone;
    const newTask = await new Task ({
      ...oldTask
    });
    db.set(this.taskId, newTask);
    return newTask;
  };
}

Task.findAllTasksOfUser = async id => {
  const allTasks = [...db.values()];
  return allTasks.map((task)=>{
    if (task.userId === id) {
      return task;
    }
  })
}

module.exports = Task;