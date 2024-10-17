const allToRight = document.getElementById("1")
const toRight = document.getElementById("2")
const toLeft = document.getElementById("3")
const allToLeft = document.getElementById("4")

const leftList = document.getElementById("left-list")
const rightList = document.getElementById("right-list")

let selectedItems = []

// Function to move selected items to another list and uncheck their checkboxes
function moveSelectedItems(toList) {
  selectedItems.forEach((item) => {
    toList.appendChild(item)
    const checkbox = item.querySelector("input[type='checkbox']")
    checkbox.checked = false // Uncheck the checkbox
  })
  selectedItems = []
}

// Add event listeners for checkboxes to track selected items
document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
  checkbox.addEventListener("input", (e) => {
    const item = e.target.parentElement
    if (e.target.checked) {
      selectedItems.push(item)
    }
  })
})

// Move selected items to the right list
toRight.addEventListener("click", () => {
  moveSelectedItems(rightList)
})

// Move selected items to the left list
toLeft.addEventListener("click", () => {
  moveSelectedItems(leftList)
})

// Move all items to the right list and uncheck all
allToRight.addEventListener("click", () => {
  const allItems = [...leftList.children]
  allItems.forEach((item) => {
    rightList.appendChild(item)
    const checkbox = item.querySelector("input[type='checkbox']")
    checkbox.checked = false // Uncheck the checkbox
  })
  selectedItems = []
})

// Move all items to the left list and uncheck all
allToLeft.addEventListener("click", () => {
  const allItems = [...rightList.children]
  allItems.forEach((item) => {
    leftList.appendChild(item)
    const checkbox = item.querySelector("input[type='checkbox']")
    checkbox.checked = false // Uncheck the checkbox
  })
  selectedItems = []
})
