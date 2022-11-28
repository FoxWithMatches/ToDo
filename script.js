
document.querySelector(".btn-notes").onclick = function() {
    
    const newToDo = document.querySelector(".notes-input");
    if (newToDo.value.length === 0){
        alert("Введите заметку")
    } else {
        document.querySelector("ul.all-lists").innerHTML += 
        ` <li class="notes-item">${newToDo.value}</li>`;
        newToDo.value = "";
    }
console.log(document.querySelector("ul.all-lists"));

}

