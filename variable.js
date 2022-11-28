const body = document.body;
const container = document.createElement("div")
container.className = "container"

//Lists
const reminders = document.createElement("div")
reminders.className = "reminders"

const lists = document.createElement("div")
lists.className = "lists"
const h2 = document.createElement("h2")
h2.className = "h2"
h2.innerHTML = "Заметки"

const allLists = document.createElement("div")
allLists.className = "all-lists"

const btnListItem = document.createElement("button")
btnListItem.className = "list-item"

const btnTextList = document.createElement("p")
btnTextList.className = "text-item"
btnTextList.innerHTML = "Общие"

const navArrow = document.createElement("div")
navArrow.className = "nav-arrow"

const numItemLists = document.createElement("p")
const arrow = document.createElement("div")
arrow.className = "arrow"

const btnAddLists = document.createElement("button")
btnAddLists.className = "btn-list"

const imgAddList = document.createElement("img")
imgAddList.className = "svg-add"
imgAddList.src = "./img/Union.svg"

const textBtn = document.createElement("p")
textBtn.innerHTML = "Добавить список"

//Notes
const notes = document.createElement("div")
notes.className = "notes"

const h2Notes = document.createElement("h2")
h2Notes.className = "h2"
h2Notes.innerHTML = "Общие"

const allNotes = document.createElement("ul")
allNotes.classList = "all-lists"

const notesItem = document.createElement("li")
notesItem.className = "notes-item"
notesItem.textContent = "Молоко"

const notesItemNew = document.createElement("li")
notesItemNew.className = "notes-item"
notesItemNew.textContent = "Корм коту"

const btnNotes = document.createElement("button")
btnNotes.className = "btn-notes"
btnNotes.textContent = "Добавить заметку"

const input = document.createElement("input")
input.className = "notes-input"
input.placeholder = "Новая заметка"

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

allNotes.append(notesItem, notesItemNew)











