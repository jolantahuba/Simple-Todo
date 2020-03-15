class Task {
    constructor(id, name, isDone = false) {
        this.id = id;
        this.name = name;
        this.isDone = isDone;
    }

    create() {
        const task = document.createElement('li');
        task.classList.add('task');
        task.dataset.taskId = this.id;
        task.innerHTML = `
        <input type="checkbox" id="${this.id}" class="task__checkbox" ${this.isDone?'checked':''}>
        <div class="task__desc">
        <label class="task__name" for="${this.id}">${this.name}</label>
        <button aria-label="Remove task" class="task__remove-btn" data-task-id="${this.id}"></button>
        </div>`;

        return task;
    }

    checkboxHandling(taskId, countCallback) {
        const checkbox = document.getElementById(taskId);
        checkbox.addEventListener('change', this.setDone.bind(this));
        checkbox.addEventListener('change', countCallback);
    }

    removeBtnHandling(taskId, rmCallback) {
        const removeBtnId = `.task__remove-btn[data-task-id="${taskId}"]`;
        const removeBtn = document.querySelector(removeBtnId);
        removeBtn.addEventListener('click', function () {
            //this = button
            rmCallback(this.dataset.taskId);
        });
    }

    setDone() {
        this.isDone = !this.isDone;
    }
}