'use strict'

let bank = [
    {'tarefa': 'ESTUDAR BD', 'status': ''},
    {'tarefa': 'ESTUDAR LP', 'status': ''}
]

const getBank = () => JSON.parse(localStorage.getItem('todoList')) ?? []
const setBank = bank => localStorage.setItem('todoList', JSON.stringify(bank))


const createItem = (task, status, index) => {
    const item = document.createElement('label')
    item.classList.add('todo__item')
    item.innerHTML = `
    <input type="checkbox" ${status} data-indice="${index}">
    <div>${task}</div>
    <input type="button" value="X" data-indice="${index}">
    `
    document.getElementById('todoList').appendChild(item)
}

const clearTask = () => {
    const todoList = document.getElementById('todoList')
    while(todoList.firstChild) {
        todoList.lastChild.remove()
    }
}

const updateScreen = () => {
    clearTask()
    const bank = getBank()
    bank.forEach((item, index) => createItem(item.tarefa, item.status, index))
    setBank(bank)
}

const insertItem = event => {
    const key = event.key
    const text = event.target.value
    if (key === 'Enter') {
        const bank = getBank()
        bank.push({'tarefa': text, 'status': ''})
        setBank(bank)
        updateScreen()
        event.target.value = ''
    }
}

const removeItem = index => {
    const bank = getBank()
    bank.splice(index, 1)
    setBank(bank)
    updateScreen()
}

const updateItem = index => {
    const bank = getBank()
    bank[index].status = bank[index].status === '' ? 'checked' : ''
    setBank(bank)
    updateScreen()
}

const clickItem = event => {
    const element = event.target
    if (element.type === 'button') {
        const index = element.dataset.indice
        removeItem(index)
    } else if(element.type === 'checkbox') {
        const index = element.dataset.indice
        updateItem(index)
    }
}

document.getElementById('newItem').addEventListener('keypress', insertItem)
document.getElementById('todoList').addEventListener('click', clickItem)

updateScreen()
























// 'use strict'

// let bank = []

// const getBank = () => JSON.parse(localStorage.getItem('todoList')) ?? []
// const setBank = bank => localStorage.setItem('todoList', JSON.stringify(bank))

// const createItem = (task, status, index) => {
//     const item = document.createElement('label')
//     item.classList.add('todo__item')
//     item.innerHTML = `
//     <input type="checkbox" ${status} data-indice=${index}>
//     <div>${task}</div>
//     <input type="button" value="X" data-indice="indice">
//     `
//     document.getElementById('todoList').appendChild(item)
// }

// const clearTask = () => {
//     const todoList = document.getElementById('todoList')
    
//     while(todoList.firstChild) {
//         todoList.removeChild(todoList.lastChild)
//     }
// }

// const updateScreen = () => {
//     clearTask()
//     const bank = getBank()
//     bank.forEach((item, index) => createItem(item.task, item.status, index))
// }

// const insertItem = event => {
//     const key = event.key
//     const text = event.target.value

//     if (key === 'Enter') {
//         const bank = getBank()
//         bank.push({'task': text, 'status': ''})
//         setBank(bank)
//         updateScreen()
//         event.target.value = ''
//     }
// }

// const removeItem = index => {
//     const bank = getBank()
//     bank.splice(index, 1)
//     setBank(bank)
//     updateScreen()
// }

// const updateItem = index => {
//     const bank = getBank()
//     bank[index].status = bank[index].status === '' ? 'checked' : ''
//     setBank(bank)
//     updateScreen()
// }

// const clickItem = event => {
//     const element = event.target
//     console.log(element.type)

//     if(element.type === 'button') {
//         const index = element.dataset.indice
//         removeItem(index)
//     } else if (element.type === 'checkbox') {
//         const index = element.dataset.indice
//         updateItem(index)
//     }
// }

// document.getElementById('newItem').addEventListener('keypress', insertItem)
// document.getElementById('todoList').addEventListener('click', clickItem)


// updateScreen()