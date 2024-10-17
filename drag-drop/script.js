const containers = document.querySelectorAll(".container")
const boxes = document.querySelectorAll(".box")

let draggedItem

boxes.forEach((box) => {
  box.addEventListener("dragstart", () => {
    box.classList.add("dragging")
    draggedItem = box
  })
  box.addEventListener("dragend", () => {
    box.classList.remove("dragging")
  })
})

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault()
  })

  container.addEventListener("drop", () => {
    if (draggedItem) {
      const emptyMsg = container.querySelector(".empty-msg")
      if (emptyMsg) {
        container.removeChild(emptyMsg)
      }

      container.appendChild(draggedItem)
    }

    checkEmptyMessages()
  })

  if (!container.children.length) {
    addEmptyMessage(container)
  }
})

function addEmptyMessage(container) {
  const emptyMsg = document.createElement("h1")
  emptyMsg.classList.add("empty-msg")
  emptyMsg.innerText = "Put Something in it!"
  container.appendChild(emptyMsg)
}

function checkEmptyMessages() {
  containers.forEach((container) => {
    const hasBoxes = container.querySelector(".box")
    const emptyMsg = container.querySelector(".empty-msg")

    if (!hasBoxes && !emptyMsg) {
      addEmptyMessage(container)
    }
  })
}
