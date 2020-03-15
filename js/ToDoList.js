class ToDoList {
    constructor() {
        this.listContainer = document.getElementById('taskList');
        this.taskList = new List(this.listContainer);
        this.newTaskId = 0;

        this.addTaskInput = document.getElementById('addTaskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.rmDoneBtn = document.getElementById('rmDoneBtn');

        this.startApp();
        this.saveTaskList();
        this.loadTaskList();
    }

    startApp() {
        this.addTaskBtn.addEventListener('click', () => {
            const taskName = this.addTaskInput.value.trim();
            this.taskList.addTask(this.newTaskId++, taskName);
            this.addTaskInput.value = '';
        });

        this.addTaskInput.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                const taskName = this.addTaskInput.value.trim();
                this.taskList.addTask(this.newTaskId++, taskName);
                this.addTaskInput.value = '';
            }
        });

        this.rmDoneBtn.addEventListener('click', this.taskList.removeDoneTasks.bind(this.taskList));
    }

    loadTaskList() {
        const loadedTasks = JSON.parse(localStorage.getItem('taskList'));
        const newId = JSON.parse(localStorage.getItem('newTaskId'));
        if (loadedTasks.length) {
            loadedTasks.forEach(loadedTask => {
                this.taskList.addTask(loadedTask.id, loadedTask.name, loadedTask.isDone);
            });
            this.newTaskId = newId;
        } else {
            this.newTaskId = 0;
        }
    }

    saveTaskList() {
        window.addEventListener("beforeunload", () => {
            localStorage.clear();
            localStorage.setItem('taskList', JSON.stringify(this.taskList.tasks));
            localStorage.setItem('newTaskId', this.newTaskId);
        });
    }
}

const app = new ToDoList();