// const img = document.getElementById('img')
// const buttons = document.getElementById('buttons')
// let colorIndex = 0
// let intervalId = null

// const trafficLight = (event) => {
//   stopAutomatic()
//   turnOn[event.target.id]()
// }

// const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0

// const changeColor = () => {
//   const colors = ['red', 'yellow', 'green']
//   const color = colors[colorIndex]
//   turnOn[color]()
//   nextIndex()
// }

// const stopAutomatic = () => {
//   clearInterval(intervalId)
// }

// const turnOn = {
//   'red': () => img.src = './img/vermelho.png',  
//   'yellow': () => img.src = './img/amarelo.png',
//   'green': () => img.src = './img/verde.png',
//   'automatic': () => intervalId = setInterval(changeColor, 1000)
// }

// buttons.addEventListener('click', trafficLight)




const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let countIndexColor = 0
let stopIntervalId = null

const selectedButton = e => {
  stopInterval()
  turnOn[e.target.id]()
}


const nextIndex = () => countIndexColor = countIndexColor < 2 ?
++countIndexColor : 0

const showColor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors[countIndexColor]
  turnOn[color]()
  nextIndex()
}

const stopInterval = () => {
  clearInterval(stopIntervalId)
}

const turnOn = {
  'red': () => img.src = './img/vermelho.png',
  'yellow': () => img.src = './img/amarelo.png',
  'green': () => img.src = './img/verde.png',
  'automatic': () => stopIntervalId = setInterval(showColor, 1000)
}

buttons.addEventListener('click', selectedButton)