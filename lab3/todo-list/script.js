const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const completedListContainer = document.getElementById("completed-list-container")

const uncomp = document.getElementById("uncomp")
const comp = document.getElementById("comp")

function addTask(){
    if(inputBox.value === '') {
        alert("You must write something")
    }else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ''
    saveTasks()
}

let input = document.getElementById("input-box")

input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        document.getElementById("btn").click()
    }
})



listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        completedListContainer.appendChild(e.target)
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveTasks()
}, false);

completedListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        listContainer.appendChild(e.target)
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveTasks()
}, false);





function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML)
    localStorage.setItem("completedTasks", completedListContainer.innerHTML)
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks")
    completedListContainer.innerHTML = localStorage.getItem("completedTasks")
}
showTasks()