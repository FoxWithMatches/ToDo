import { body, container, reminders, lists, h2, allLists,btnListItem, btnTextList, navArrow, numItemLists, arrow, btnAddLists, imgAddList, textBtn, notes, h2Notes, allNotes, deletedBtn, deleteImg, btnNotes, input } from "./variable.js"

//Append
body.append(container)
container.append(reminders)
reminders.append(lists, btnAddLists, notes)
lists.append(h2, allLists)
allLists.append(btnListItem)
btnListItem.append(btnTextList, navArrow)
navArrow.append(numItemLists, arrow)
btnAddLists.append(imgAddList, textBtn)
notes.append(h2Notes, allNotes, btnNotes, input)
deletedBtn.append(deleteImg)

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

document.querySelector(".btn-notes").onclick = function() {
        const listItem = document.createElement("li");
        listItem.className = "notes-item"
        const deletedBtn = document.createElement("button")
        deletedBtn.className = "delete"
        const deleteImg = document.createElement("img")
        deleteImg.className = "delete-img"
        deleteImg.src = "./img/Union.svg"
    
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
        event.stopPropagation();
        localStorage.removeItem("ul.all-lists")
    });

}


//two
// const message = document.querySelector(".notes-input");
// const addButton = document.querySelector(".btn-notes");

// let toDoList = [];
// if(localStorage.getItem("todo")) {
//     toDoList = JSON.parse(localStorage.getItem("todo"));
//     displayMessages()
// }


// addButton.addEventListener("click", function() {
//     const newTodo = {
//         todo: message.value,
//     };
//     toDoList.push(newTodo);
//     displayMessages();
//     localStorage.setItem("todo", JSON.stringify(toDoList))
// });

// function displayMessages() {
//     let displayMessage = "";
    
//     toDoList.forEach(function(item, index) {
//         displayMessage += `
//             <li class="notes-item" id="item_${index}">
//                 ${item.todo}
//                 <button class="delete" id="item_${index}" data-action="delete">
//                     <img class="delete-img id="item_${index}" src="./img/Union.svg">
//                 </button>
//             </li>
//         `;
//         allNotes.innerHTML = displayMessage;
//     })
// }