const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");

    toDoList.appendChild(li);
    li.appendChild(span);
    span.innerText = newToDoObj.text;
    
    const button = document.createElement("button");
    li.appendChild(button);
    button.innerText = "❌";
    
    if (newToDoObj.text !== "sex" && newToDoObj.text !== "sexs")
        button.addEventListener("click", deleteToDo);
    else
        button.addEventListener("click", alertSex);
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);

    if(newToDoObj.text === "sex" || newToDoObj.text === "섹스")
        paintToDo(newToDoObj);
    
    
    else
        paintToDo(newToDoObj);
    
    saveToDos();
    toDoInput.value = "";
}

function alertSex(){
    alert("You can't do that!");
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


