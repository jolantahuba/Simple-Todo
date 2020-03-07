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
            let taskElement = document.createElement('li');
            taskElement.classList.add('task');
            taskElement.dataset.key = task.id;
            taskElement.innerHTML = `
        <input type="checkbox" id="${task.id}" class="task__checkbox" ${task.isDone?'checked':''}>
        <div class="task__desc">
            <label class="task__name" for="${task.id}">${task.name}</label>
            <button class="task__remove-btn" data-key="${task.id}"></button>
        </div>`

            this.htmlTaskList.appendChild(taskElement);
        })

        const removeBtns = document.querySelectorAll('.task__remove-btn');
        removeBtns.forEach(btn => {
            btn.addEventListener('click', this.removeElement.bind(this));
        });

        const checkboxes = document.querySelectorAll('.task__checkbox');
        checkboxes.forEach(checkbox => checkbox.addEventListener('click', this.checkDone.bind(this)));
    }


    // to TaskList or statistics
    checkDone(e) {
        // console.log(e.target);
        const index = this.taskList.tasks.findIndex(task => task.id == e.target.id);
        if (e.target.checked) {
            this.taskList.tasks[index].isDone = true;
            console.log(this.taskList.tasks)
        } else if (!e.target.checked) {
            this.taskList.tasks[index].isDone = false;
            console.log(this.taskList.tasks)

        }
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

    removeElement(e) {
        const id = e.target.dataset.key;
        this.taskList.removeTask(id);

        this.render();

        // const taskId = `.task[data-key="${id}"]`;
        // document.querySelector(taskId).remove();
    }

}

const app = new ToDoApp();