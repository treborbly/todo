"use strict";
let tasks = document.querySelector('.tasks');
let taskInput = document.getElementById('add');
let taskSubmit = document.getElementById('submit-task');
class Task {
    constructor() {
    }
    createTask(e) {
        e.preventDefault();
        let container = document.createElement('div');
        container.setAttribute('class', 'new-task-container');
        document.body.appendChild(container);
        let new_task = document.createElement('input');
        let remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        new_task.value = taskInput.value;
        new_task.setAttribute("class", "task-in-list");
        new_task.setAttribute("id", "new-task");
        new_task.setAttribute("readonly", "true");
        remove.setAttribute("class", "task-remove-button");
        container.appendChild(new_task);
        container.appendChild(remove);
        taskInput.value = '';
        remove.onclick = function () {
            document.body.removeChild(container);
        };
    }
}
let taskInit = new Task();
taskSubmit.onclick = taskInit.createTask;
