class Search {
    constructor() {

    }

    static searchTask(input, list) {
        const backSearchBtn = document.getElementById('backSearchBtn');
        const infoSearchText = document.getElementById('infoSearchText');
        const phrase = input.value.trim();
        const searchList = list.filter(task => task.name.includes(phrase));

        list.forEach(task => {
            const element = document.querySelector(`.task[data-key="${task.id}"]`);
            if (!task.name.includes(phrase)) {
                element.style.display = 'none';
            } else {
                element.style.display = 'flex';
            }
        });

        backSearchBtn.style.visibility = 'visible';
        infoSearchText.style.visibility = 'visible';

        backSearchBtn.addEventListener('click', () => {
            this.render();
            backSearchBtn.style.display = 'none';
        });

        if (searchList.length) {
            infoSearchText.textContent = 'Search results:'
            infoSearchText.style.color = 'black';
        } else {
            infoSearchText.textContent = 'No results';
            infoSearchText.style.color = 'red';
        }


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