class Search {
    constructor() {}

    static searchTask(input, list) {
        const tasks = document.querySelectorAll('.tasks .task');
        const phrase = input.value;
        console.log(phrase);

        list.forEach(task => {
            const element = document.querySelector(`.task[data-key="${task.id}"]`);
            if (!task.name.includes(phrase)) {
                element.style.display = 'none';
            } else {
                element.style.display = 'flex';
            }
        })


        // searchTask() {

        //     const phrase = input.value;
        //     const searchList = this.taskList.filter(task => task.name.includes(phrase));
        //     console.log(phrase);

        //     if (phrase.trim()) {
        //         this.render(searchList);
        //     } else {
        //         this.render(this.taskList);
        //     }
        // }


    }
}