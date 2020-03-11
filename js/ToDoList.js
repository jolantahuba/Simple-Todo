class ToDoList {
    constructor() {
        this.listContainer = document.getElementById('taskList');
        this.taskList = new List(this.listContainer);
        this.newTaskId = 0;

        this.addTaskInput = document.getElementById('addTaskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.rmDoneBtn = document.getElementById('rmDoneBtn');

        this.addTaskBtn.addEventListener('click', this.addBtnHandling.bind(this));
        this.rmDoneBtn.addEventListener('click', this.taskList.removeDoneTasks.bind(this.taskList));

        this.addTaskInput.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                this.addBtnHandling.call(this);
            }
        });
    }

    addBtnHandling() {
        const name = this.addTaskInput.value.trim();
        this.taskList.addTask(this.newTaskId++, name);
        this.addTaskInput.value = '';
    }
}

const app = new ToDoList();