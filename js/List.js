class List {
    constructor(container) {
        this.listContainer = container;
        this.tasks = [];
        this.doneTaskSpan = document.getElementById('doneTaskSpan');
    }

    addTask(id, name, isDone) {
        if (name.trim() !== '') {
            const task = new Task(id, name, isDone);
            this.tasks.push(task);

            const taskElement = task.create();
            this.listContainer.appendChild(taskElement);

            task.checkboxHandling(task.id, this.showDone.bind(this));
            task.removeBtnHandling(task.id, this.removeTask.bind(this));
        }
        this.showDone();
    }

    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id == id);
        this.tasks.splice(index, 1);

        const taskId = `.task[data-task-id="${id}"]`;
        document.querySelector(taskId).remove();

        this.showDone();
    }

    removeDoneTasks() {
        const doneTasks = this.tasks.filter(task => task.isDone);

        if (doneTasks.length > 0) {
            doneTasks.forEach(doneTask => {
                this.removeTask(doneTask.id);
            });
        } else return;

        this.showDone();
    }

    showDone() {
        const doneTasks = this.tasks.filter(task => task.isDone).length;

        this.doneTaskSpan.textContent = this.tasks.length ? `${doneTasks}/${this.tasks.length}` : doneTasks;

        if (doneTasks === this.tasks.length && doneTasks) {
            this.doneTaskSpan.style.color = '#197B00';
        } else {
            this.doneTaskSpan.style.color = '#C5278C';
        }
    }
}