loadEvents();

function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrCheck);
}

// submit data
function submit(element) {
    element.preventDefault();
    let input = document.querySelector('input');
    if (input.value !== '')
        addTask(input.value);
    input.value = '';
}

// add tasks
function addTask(task) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete">×</span>`;
    ul.appendChild(li);
    document.querySelector('.tasksBoard').style.display = 'block';
}

// remove all tasks
function clearList(element) {
    let ul = document.querySelector('ul').innerHTML = '';
}

// delete task or check
function deleteOrCheck(element) {
    if (element.target.className === 'delete')
        deleteTask(element);
    else {
        checkTask(element);
    }
}

// delete task
function deleteTask(element) {
    let remove = element.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

// check task
function checkTask(element) {
    const task = element.target.nextSibling;
    if (element.target.checked) {
        task.style.textDecoration = "line-through";
        task.style.color = "#DC143C";
    } else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
}