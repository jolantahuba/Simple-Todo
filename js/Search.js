class Search {
    constructor() {}

    static searchTask(mainList, input) {
        // console.log(this);
        const searchList = new ToDoList();
        console.log(searchList);
        const backSearchBtn = document.getElementById('backSearchBtn');
        const infoSearchText = document.getElementById('infoSearchText');

        const phrase = input.value.trim();
        searchList.taskList = mainList.taskList.filter(task => task.name.includes(phrase));

        searchList.render();

        //info panel
        backSearchBtn.style.visibility = 'visible';
        infoSearchText.style.visibility = 'visible';

        backSearchBtn.addEventListener('click', () => {
            mainList.taskList = [...mainList.taskList, ...searchList.taskList];
            //remove duplicates:
            mainList.taskList = [...new Set(mainList.taskList)];
            // mainList.render();

            backSearchBtn.style.visibility = 'hidden';
            infoSearchText.style.visibility = 'hidden';
            return mainList.taskList;

        });

        if (searchList.taskList.length) {
            infoSearchText.textContent = 'Search results:'
            infoSearchText.style.color = 'black';
        } else {
            infoSearchText.textContent = 'No results';
            infoSearchText.style.color = 'red';
        }


    }


    // static searchTask(input, list) {
    //     const backSearchBtn = document.getElementById('backSearchBtn');
    //     const infoSearchText = document.getElementById('infoSearchText');
    //     const phrase = input.value.trim();
    //     const searchList = list.filter(task => task.name.includes(phrase));

    //     list.forEach(task => {
    //         const element = document.querySelector(`.task[data-key="${task.id}"]`);
    //         if (!task.name.includes(phrase)) {
    //             element.style.display = 'none';
    //         } else {
    //             element.style.display = 'flex';
    //         }
    //     });

    //     backSearchBtn.style.visibility = 'visible';
    //     infoSearchText.style.visibility = 'visible';

    //     backSearchBtn.addEventListener('click', () => {
    //         this.render();
    //         backSearchBtn.style.display = 'none';
    //     });

    //     if (searchList.length) {
    //         infoSearchText.textContent = 'Search results:'
    //         infoSearchText.style.color = 'black';
    //     } else {
    //         infoSearchText.textContent = 'No results';
    //         infoSearchText.style.color = 'red';
    //     }
    // }
}