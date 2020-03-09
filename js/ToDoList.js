class ToDoList {
    constructor() {
        this.taskList = [];
        this.htmlTaskList = document.getElementById('taskList');
        this.addTaskInput = document.getElementById('addTaskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.rmDoneBtn = document.getElementById('rmDoneBtn');
        this.doneTaskCounter = document.getElementById('doneTaskCounter');
        this.checkboxes = null;

        this.addTaskBtn.addEventListener('click', this.addTask.bind(this));
        this.rmDoneBtn.addEventListener('click', this.removeDoneTasks.bind(this));

        this.newTaskId = 0;
        this.doneTasks = 0;
    }


    render() {
        this.htmlTaskList.innerHTML = '';
        this.taskList.forEach(task => {
            const taskElement = task.create();
            this.htmlTaskList.appendChild(taskElement);

            // task.checkboxHandling(task.id);
            task.removeBtnHandling(task.id, this.removeTask.bind(this));
        });

        this.checkboxes = document.querySelectorAll('.task__checkbox');
        this.countDone();
    }

    countDone() {
        this.checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', () => {
                checkbox.checked ? this.doneTasks++ : this.doneTasks--;
                this.doneTaskCounter.textContent = this.doneTasks;
            });
        });
    }

    addTask() {
        const taskName = this.addTaskInput.value;
        if (taskName !== '') {
            const task = new Task(this.newTaskId++, taskName);
            this.taskList.push(task);
        }
        this.addTaskInput.value = '';

        this.render();
    }

    removeTask(e) {
        const id = e.target.dataset.key;
        const index = this.taskList.findIndex(task => task.id == id);
        this.taskList.splice(index, 1);

        // this.render();

        const taskId = `.task[data-key="${id}"]`;
        document.querySelector(taskId).remove();
    }

    removeDoneTasks() {
        // const notDone = this.taskList.filter(task => !task.isDone);
        // this.taskList = notDone;

        this.checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const index = this.taskList.findIndex(task => task.id == checkbox.id);
                this.taskList.splice(index, 1);
            }
        });

        this.render();
    }

}



const app = new ToDoList();