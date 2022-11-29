const todo = {
    init() {
        const fromStorage = localStorage.getItem("ul.all-lists");
        if (fromStorage) {
            document.querySelector("ul.all-lists").innerHTML = fromStorage;
        }
    },
    save() {
        localStorage.setItem('ul.all-lists', document.querySelector("ul.all-lists").innerHTML);
    },
  };

  document.addEventListener("DOMContentLoaded", todo.init());

  //add todo
  document.querySelector(".btn-notes").onclick = function() {
    const listItem = document.createElement("li");
    listItem.className = "notes-item"
    const deletedBtn = document.createElement("button")
    deletedBtn.className = "delete"
    const deleteImg = document.createElement("img")
    deleteImg.className = "delete-img"
    deleteImg.src = "./img/Union.svg"
    const db = {};

    const newToDo = document.querySelector(".notes-input").value;
    if (newToDo.length === 0){
        alert("Введите заметку")
    } else {
        listItem.append(newToDo, deletedBtn)
        deletedBtn.append(deleteImg)
        allNotes.appendChild(listItem)
        input.value = "";
        deleteToDo(deletedBtn)
        todo.save()
    }
}

//delete todo
function deleteToDo(el) {
    el.addEventListener("click", (event) => {
        el.parentElement.remove();
        console.log(el.parentElement);
        event.stopPropagation();
    });
}