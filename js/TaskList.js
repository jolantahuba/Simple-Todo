class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        if (task instanceof Task) {
            this.tasks.push(task);
        } else {
            throw new Error('Parameter has to be an instance of Task class');
        }
    }

    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id == id);
        this.tasks.splice(index, 1);
    }


}