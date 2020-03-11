class Search {
    constructor() {}

    static searchTask(mainList, input) {
        console.log(this);
        const searchList = new List();
        const backSearchBtn = document.getElementById('backSearchBtn');
        const infoSearchText = document.getElementById('infoSearchText');
        const addTaskPanel = document.getElementById('addTaskPanel');
        const btnsPanel = document.getElementById('btnsPanel');

        const phrase = input.value.trim();
        searchList.tasks = mainList.tasks.filter(task => task.name.includes(phrase));
        searchList.render();

        this.backSearchBtn.style.display = 'block';
        this.infoSearchText.style.display = 'block';
        this.addTaskPanel.style.display = 'none';
        this.btnsPanel.style.display = 'none';

        if (searchList.tasks.length) {
            infoSearchText.textContent = `Search results for "${phrase}":`
            infoSearchText.style.color = 'black';
        } else {
            infoSearchText.textContent = `No results for "${phrase}"`;
            infoSearchText.style.color = 'red';
        }

        backSearchBtn.addEventListener('click', () => {
            backSearchBtn.style.display = 'none';
            infoSearchText.style.display = 'none';
            addTaskPanel.style.display = 'flex';
            btnsPanel.style.display = 'flex';

            //sync and remove duplicates
            mainList.tasks = [...this.mainList.tasks, ...this.searchList.tasks];
            mainList.tasks = [...new Set(this.mainList.tasks)];
            mainList.render();

            return mainList.tasks;
        });


    }



}