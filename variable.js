export const body = document.body;
export const container = document.createElement("div")
container.className = "container"

//Lists
export const reminders = document.createElement("div")
reminders.className = "reminders"

export const lists = document.createElement("div")
lists.className = "lists"
export const h2 = document.createElement("h2")
h2.className = "h2"
h2.innerHTML = "Заметки"

export const allLists = document.createElement("div")
allLists.className = "all-lists"

export const btnListItem = document.createElement("button")
btnListItem.className = "list-item"

export const btnTextList = document.createElement("p")
btnTextList.className = "text-item"
btnTextList.innerHTML = "Общие"

export const navArrow = document.createElement("div")
navArrow.className = "nav-arrow"

export const numItemLists = document.createElement("p")
export const arrow = document.createElement("div")
arrow.className = "arrow"

export const btnAddLists = document.createElement("button")
btnAddLists.className = "btn-list"

export const imgAddList = document.createElement("img")
imgAddList.className = "svg-add"
imgAddList.src = "./img/Union.svg"

export const textBtn = document.createElement("p")
textBtn.innerHTML = "Добавить список"

//Notes
export const notes = document.createElement("div")
notes.className = "notes"

export const h2Notes = document.createElement("h2")
h2Notes.className = "h2"
h2Notes.innerHTML = "Общие"

export const allNotes = document.createElement("ul")
allNotes.classList = "all-lists"

export const deletedBtn = document.createElement("button")
deletedBtn.className = "delete"
deletedBtn.dataset.action = "delete"
export const deleteImg = document.createElement("img")
deleteImg.className = "delete-img"
deleteImg.src = "./img/Union.svg"

export const btnNotes = document.createElement("button")
btnNotes.className = "btn-notes"
btnNotes.textContent = "Добавить заметку"

export const input = document.createElement("input")
input.className = "notes-input"
input.placeholder = "Новая заметка"










