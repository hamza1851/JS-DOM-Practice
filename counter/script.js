const counter = document.querySelector(".count")
const subBtn = document.querySelector(".sub")
const addBtn = document.querySelector(".add")
const resetBtn = document.querySelector(".reset")
const countDisplay = document.querySelector("#num-count")

let count = 0
let countBy = 0

countDisplay.addEventListener("change", (e) => {
  countBy = Number(countDisplay.value)
})

subBtn.addEventListener("click", () => {
  count -= countBy
  counter.textContent = count
})
addBtn.addEventListener("click", () => {
  count += countBy
  counter.textContent = count
})

resetBtn.addEventListener("click", () => {
  count = 0
  counter.textContent = count
})
