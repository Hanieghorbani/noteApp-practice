let listBox = document.querySelector(".listBox")
let userInput = document.querySelector(".userInput")
let colors = document.querySelector(".colors")
let addBtn = document.querySelector(".add")
let removeBtn = document.querySelector(".remove")

userInput.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    listGenerator(userInput.value)
  }
})

function listGenerator(value) {
  if (value.trim()) {
    let newLi = `<li class="listItem" style="background-color:${userInput.style.backgroundColor}">${value}</li>`
    listBox.insertAdjacentHTML("beforeend", newLi)
    userInput.value = ""
    userInput.style.backgroundColor = "white"
  }
}

colors.addEventListener("click", (e) => {
  if (e.target.tagName == "SPAN") {
    let backColorBtn = e.target.getAttribute("style").substring(18)
    userInput.style.backgroundColor = `${backColorBtn}`
  }
})

addBtn.addEventListener("click", () => {
  listGenerator(userInput.value)
})

removeBtn.addEventListener("click", () => {
  listBox.innerHTML = ""
})

listBox.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.remove()
  }
})
