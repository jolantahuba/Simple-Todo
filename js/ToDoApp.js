class ToDoApp {
    constructor() {
        this.taskList = new TaskList();
        this.addInput = document.getElementById('add__input');
        this.addBtn = document.querySelector('.add__btn');
        this.htmlTaskList = document.querySelector('.tasks');

        this.addBtn.addEventListener('click', this.addElement.bind(this));
        this.newTaskId = 0;

    }



    render() {
        this.htmlTaskList.innerHTML = '';
        this.taskList.tasks.forEach(task => {
            const taskElement = task.create();
            this.htmlTaskList.appendChild(taskElement);

            task.checkboxHandling(task.id);
            task.removeBtnHandling(task.id, this.removeElement.bind(this));

        });

    }


    addElement() {
        const taskName = this.addInput.value;
        if (taskName !== '') {
            const task = new Task(this.newTaskId++, taskName);
            this.taskList.addTask(task);
        }

        this.render()
        this.addInput.value = '';
    }


    // to TaskList, do 1 method for remove, same for add maybe
    removeElement(e) {
        const id = e.target.dataset.key;
        this.taskList.removeTask(id);

        this.render();

        // const taskId = `.task[data-key="${id}"]`;
        // document.querySelector(taskId).remove();
    }

}

const app = new ToDoApp();