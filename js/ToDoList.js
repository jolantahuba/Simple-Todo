class ToDoList {
    constructor() {
        this.taskList = [];
        this.htmlListContainer = document.getElementById('taskList');
        this.addTaskInput = document.getElementById('addTaskInput');
        this.doneTaskSpan = document.getElementById('doneTaskSpan');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.rmDoneBtn = document.getElementById('rmDoneBtn');
        this.searchBtn = document.getElementById('searchBtn');

        this.addTaskBtn.addEventListener('click', this.addTask.bind(this));
        this.rmDoneBtn.addEventListener('click', this.removeDoneTasks.bind(this));

        this.searchBtn.addEventListener('click', () => {
            Search.searchTask.call(this, this.addTaskInput, this.taskList);
        });

        this.addTaskInput.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                this.addTask.call(this);
            }
        });

        this.newTaskId = 0;
        this.doneTasks = 0;
    }


    render() {
        this.htmlListContainer.innerHTML = '';
        this.taskList.forEach(task => {
            const taskElement = task.create();
            this.htmlListContainer.appendChild(taskElement);

            task.checkboxHandling(task.id, this.countDone.bind(this));
            task.removeBtnHandling(task.id, this.removeTask.bind(this));
        });

        this.countDone();
    }

    countDone() {
        const undone = this.taskList.filter(task => !task.isDone);
        this.doneTasks = this.taskList.length - undone.length;
        this.doneTaskSpan.textContent = this.taskList.length ? `${this.doneTasks}/${this.taskList.length}` : this.doneTasks;

        if (this.doneTasks === this.taskList.length && this.doneTasks) {
            this.doneTaskSpan.style.color = '#197B00';
        } else {
            this.doneTaskSpan.style.color = '#C5278C';
        }
    }

    addTask() {
        const taskName = this.addTaskInput.value;
        if (taskName.trim() !== '') {
            const task = new Task(this.newTaskId++, taskName.trim());
            this.taskList.push(task);
        }
        this.addTaskInput.value = '';

        this.render();
    }

    removeTask(id) {
        const index = this.taskList.findIndex(task => task.id == id);
        this.taskList.splice(index, 1);
        this.render();

        // const taskId = `.task[data-key="${id}"]`;
        // document.querySelector(taskId).remove();
    }

    removeDoneTasks() {
        const undoneTasks = this.taskList.filter(task => !task.isDone);
        this.taskList = undoneTasks;
        this.render();

        // const doneTasks = this.taskList.filter(task => task.isDone);
        // if (doneTasks.length > 0) {
        //     doneTasks.forEach(doneTask => {
        //         this.removeTask(doneTask.id);
        //     });
        // } else return;
    }

}


const app = new ToDoList();