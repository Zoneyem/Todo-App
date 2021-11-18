'use strict'

const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const deletebtn = document.querySelector('.delete')
const search = document.querySelector('.search input')
const newList = Array.from(list.children)

const generateTemplate = (todo) => {
  const html = `   <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`

  list.innerHTML += html
}

addForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const todo = addForm.add.value.trim()

  if (todo.length) {
    generateTemplate(todo)
    addForm.reset()
  }
})
//Delete TODOS
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
  }
})

//filter
const filterTodos = (term) => {
  newList
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
      todo.classList.add('filtered')
    })
  newList
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo =>  todo.classList.remove('filtered'))
}

search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase()
  filterTodos(term)
})
