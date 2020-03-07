class Task {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.isDone = false;
    }

    create() {
        let task = document.createElement('li');
        task.classList.add('task');
        task.dataset.key = this.id;
        task.innerHTML = `
        <input type="checkbox" id="${this.id}" class="task__checkbox" ${this.isDone?'checked':''}>
        <div class="task__desc">
        <label class="task__name" for="${this.id}">${this.name}</label>
        <button class="task__remove-btn" data-key="${this.id}"></button>
        </div>`
        return task;
    }

    checkboxHandling(taskId) {
        const checkbox = document.getElementById(taskId)
        checkbox.addEventListener('click', this.checkDone.bind(this));
    }

    removeBtnHandling(taskId, removeCall) {
        const removeBtnId = `.task__remove-btn[data-key="${taskId}"]`;
        const removeBtn = document.querySelector(removeBtnId);
        removeBtn.addEventListener('click', removeCall);
    }

    checkDone(e) {
        if (e.target.checked) {
            this.isDone = true;
        } else {
            this.isDone = false;
        }
    }

}