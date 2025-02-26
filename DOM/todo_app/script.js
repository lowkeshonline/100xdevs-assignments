

let ctr = 1;

function deleteTask(index){   //Delete button call
    console.log('Delete called');
    const delEl = document.querySelector('#task-' + index);
    delEl.parentElement.removeChild(delEl);
}

function addTask(){
    const inputValue = document.querySelector('input').value;

    const todoText = document.createElement('span');
    const delButton = document.createElement('button');

    todoText.innerHTML = inputValue;
    delButton.innerHTML = "Delete";
    delButton.setAttribute('onclick', "deleteTask(" + ctr + ")");

    const divEl = document.createElement('div');
    divEl.setAttribute('id', 'task-' + ctr);
    divEl.appendChild(todoText);
    divEl.appendChild(delButton);

    document.getElementById("tasks").appendChild(divEl);
    ctr = ctr+1;
}