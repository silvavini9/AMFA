var tasks = []; //localStorage, firebase, mysql

var j = tasks.length - 1;

function addTask () {
  var task = {
    description: document.getElementById('taskDescripition').value,
    isdone: false,
    id: tasks.length
  }

  tasks.push(task);
  render();
}


function removeTask() {
    var buttonTask = document.querySelectorAll('.buttonDelete#id');
    console.log(buttonTask);
}

function render () {
  document.getElementById('taskList').innerHTML = '';
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.id = task.id;
    var taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.id = task.id;
    var taskDescripition = document.createElement('label');
    taskDescripition.className = 'titleTask';
    taskDescripition.innerHTML = task.description;
    var taskAction = document.createElement('input');
    taskAction.type = 'button'
    taskAction.className = 'buttonDelete';
    taskAction.value = 'X';
    taskAction.id = task.id;
    taskAction.setAttribute('onclick', 'removeTask()')
    taskDiv.appendChild(taskCheckBox);
    taskDiv.appendChild(taskDescripition);  
    taskDiv.appendChild(taskAction);
    document.getElementById('taskList').appendChild(taskDiv);
  }
}
