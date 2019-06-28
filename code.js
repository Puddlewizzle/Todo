const addBtn = document.querySelector('.add-task');
const removeBtn = document.querySelector('.remove-task');
const clearBtn = document.querySelector('.clear');
const tasksList = document.querySelector('ul');

const generateTask = (task) => {
    const newTask =  `<li>${task}</li>`;
    tasksList.innerHTML += newTask; 
}

let num = 1;
addTask = () => {
    const task = `Task number #${num}`
    generateTask(task);
    num ++;
}

removeTask = () => {
    tasksList.removeChild(tasksList.lastChild);
    num --;
}

removeAll = () => {
    while (tasksList.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
    }
    num = 1;
}

addBtn.addEventListener('click', addTask);
removeBtn.addEventListener('click', removeTask);
clearBtn.addEventListener('click', removeAll);