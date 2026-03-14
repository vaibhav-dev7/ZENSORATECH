const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){

taskList.innerHTML="";

tasks.forEach((task,index)=>{

let li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.textContent = task.text;

let deleteBtn = document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.classList.add("deleteBtn");

/* delete task */

deleteBtn.onclick = function(e){
e.stopPropagation();   // important fix
tasks.splice(index,1);
saveTasks();
};

/* mark complete */

li.onclick = function(){
task.completed = !task.completed;
saveTasks();
};

li.appendChild(deleteBtn);
taskList.appendChild(li);

});

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));
renderTasks();

}

function addTask(){

let text = taskInput.value.trim();

if(text==="") return;

tasks.push({text:text,completed:false});

taskInput.value="";

saveTasks();

}

/* button click */

addBtn.addEventListener("click",addTask);

/* enter key support */

taskInput.addEventListener("keypress",function(e){
if(e.key==="Enter"){
addTask();
}
});

renderTasks();