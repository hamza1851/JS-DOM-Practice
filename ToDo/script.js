const taskList = document.querySelector(".task-list")
const taskInput = document.querySelector("#task-input")
const todoInput = document.getElementsByClassName("todo-item__input")

let inputVal = ""
taskInput.addEventListener("input", (e) => {
  inputVal = e.target.value
})

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addToDo(inputVal)
    taskInput.value = ""
    inputVal = ""
  }
})

function addToDo(val) {
  const todoItem = document.createElement("li")
  todoItem.classList.add("todo-item")

  const todoItemInput = document.createElement("input")
  todoItemInput.classList.add("todo-item__input")

  todoItemInput.value = val
  todoItemInput.setAttribute("readonly", true)
  const size = inputVal.length
  todoItemInput.setAttribute("size", size)
  todoItem.appendChild(todoItemInput)

  const editBtn = document.createElement("button")
  editBtn.classList.add("edit-btn")
  editBtn.innerText = "EDIT"
  todoItem.appendChild(editBtn)

  const delBtn = document.createElement("button")
  delBtn.classList.add("del-btn")
  delBtn.innerText = "DEL"
  todoItem.appendChild(delBtn)

  taskList.appendChild(todoItem)

  const oopsMsg = taskList.querySelector(".oops-msg")
  if (oopsMsg) oopsMsg.remove()
}

taskList.addEventListener("click", (e) => {
  const targetBtn = e.target
  if (targetBtn.classList.contains("edit-btn")) {
    const listItem = e.target.parentElement
    const inputBox = listItem.querySelector("input")

    if (e.target.innerText === "EDIT") {
      inputBox.removeAttribute("readonly")
      inputBox.focus()
      e.target.innerText = "Save"
    } else {
      inputBox.setAttribute("readonly", true)
      e.target.innerText = "EDIT"
    }
  }
  if (targetBtn.classList.contains("del-btn")) {
    const listItem = e.target.parentElement
    listItem.remove()
    if (taskList.children.length === 0) {
      displayOopsMsg()
    }
  }

  if (targetBtn.classList.contains("todo-item__input")) {
    targetBtn.removeAttribute("readonly")
    targetBtn.focus()
    const editSaveBtn = targetBtn.nextSibling
    editSaveBtn.innerText = "Save"
  }
})

function displayOopsMsg() {
  const oopsMsg = document.createElement("h1")
  oopsMsg.classList.add("oops-msg")
  oopsMsg.innerText = "Oops! Your List Is Empty"
  taskList.appendChild(oopsMsg)
}
