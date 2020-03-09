class ToDoList {
    constructor() {
        this.taskList = [];
        this.htmlTaskList = document.getElementById('taskList');
        this.addTaskInput = document.getElementById('addTaskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.rmDoneBtn = document.getElementById('rmDoneBtn');
        this.doneTaskCounter = document.getElementById('doneTaskCounter');

        this.addTaskBtn.addEventListener('click', this.addTask.bind(this));
        this.rmDoneBtn.addEventListener('click', this.removeDoneTasks.bind(this));
        this.addTaskInput.addEventListener('input', Search.searchTask.bind(this));
        this.addTaskInput.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                this.addTask.call(this);
            }
        });

        this.newTaskId = 0;
        this.doneTasks = 0;
    }


    render(list) {
        this.htmlTaskList.innerHTML = '';
        list.forEach(task => {
            const taskElement = task.create();
            this.htmlTaskList.appendChild(taskElement);
        });

        const removeBtns = document.querySelectorAll('.task__remove-btn');
        removeBtns.forEach(btn => btn.addEventListener('click', this.removeTask.bind(this)));

        this.countDone();
    }

    countDone() {
        const checkboxes = document.querySelectorAll('.task__checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', () => {
                checkbox.checked ? this.doneTasks++ : this.doneTasks--;
                this.doneTaskCounter.textContent = this.doneTasks;
            });
        });
    }

    addTask() {
        const taskName = this.addTaskInput.value;
        if (taskName.trim() !== '') {
            const task = new Task(this.newTaskId++, taskName);
            this.taskList.push(task);
        }
        this.addTaskInput.value = '';

        this.render(this.taskList);
    }

    removeTask(e) {
        const id = e.target.dataset.key;
        const index = this.taskList.findIndex(task => task.id == id);
        this.taskList.splice(index, 1);

        const taskId = `.task[data-key="${id}"]`;
        document.querySelector(taskId).remove();
    }

    removeDoneTasks() {
        const checkboxes = document.querySelectorAll('.task__checkbox');

        const checkedTable = [...checkboxes].filter(checkbox => checkbox.checked);

        if (checkedTable.length > 0) {
            checkedTable.forEach(checkbox => {
                const index = this.taskList.findIndex(task => task.id == checkbox.id);
                this.taskList.splice(index, 1);

                const taskId = `.task[data-key="${checkbox.id}"]`;
                document.querySelector(taskId).remove();
            });
        } else return;
    }
}


const app = new ToDoList();