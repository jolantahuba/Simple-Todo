class Search {
    constructor() {}
    static searchTask(e) {
        console.log(e.target.value);
        const phrase = e.target.value;
        const searchList = this.taskList.filter(task => task.name.includes(phrase));

        if (phrase.trim()) {
            this.render(searchList);
        } else {
            this.render(this.taskList);
        }

    }
}