

let ctr = 1;

function deleteTask(index){   //Delete button call
    console.log("delete task called");
    const deleteEl = document.getElementById(index);
    deleteEl.parentElement.removeChild(deleteEl);
}

function addTask(){
    const inputText = document.querySelector('input').value;
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id', ctr);
    newDiv.innerHTML = "<div>" + inputText + "</div><button onclick='deleteTask(" + ctr + ")'> Delete </button>";
    document.querySelector('#tasks').appendChild(newDiv);
    ctr = ctr + 1;
}