'use strict'

const display = document.getElementById('display')
const numbers = document.querySelectorAll('[id*=tecla')
const operators = document.querySelectorAll('[id*=operador]')

let newNumber = true
let operator
let previousNumber

const operationPending = () => operator !== undefined

const calculate = () => {
  if (operationPending()) {
    const currentNumber = display.textContent.replace('.', '').replace(',', '.')
    newNumber = true
    const result = eval(`${previousNumber}${operator}${currentNumber}`)
    updateDisplay(result)
  }
}

const updateDisplay = text => {
  if (newNumber) {
    display.textContent = text.toLocaleString('BR')
    newNumber = false
  } else {
    display.textContent += text.toLocaleString('BR')
  }
  document.querySelector('#igual').focus()
}

const insertNumber = event => updateDisplay(event.target.textContent)
numbers.forEach(number => number.addEventListener('click', insertNumber))

const selectOperator = event => {
  if (!newNumber) {
    calculate()
    newNumber = true
    operator = event.target.textContent
    previousNumber = parseFloat(display.textContent.replace('.', '').replace(',', '.'))
  }
}

operators.forEach(operator => operator.addEventListener('click', selectOperator))

const activateEqual = () => {
  calculate()
  operator = undefined
}
document.getElementById('igual').addEventListener('click', activateEqual)

const clearDisplay = () => (display.textContent = '')
document.getElementById('limparDisplay').addEventListener('click', clearDisplay)

const clearCalculate = () => {
  clearDisplay()
  operator = undefined
  newNumber = true
  previousNumber = undefined
}
document.getElementById('limparCalculo').addEventListener('click', clearCalculate)

const removeLastNumber = () => (display.textContent = display.textContent.slice(0, -1))
document.getElementById('backspace').addEventListener('click', removeLastNumber)

const reverseSignal = () => {
  newNumber = true
  updateDisplay(display.textContent * -1)
}
document.getElementById('inverter').addEventListener('click', reverseSignal)

const existDecimal = () => display.textContent.indexOf(',') !== -1
const existValue = () => display.textContent.length > 0
const insertDecimal = () => {
  if (!existDecimal()) {
    if (newNumber) {
      updateDisplay('0,')
    } else {
      updateDisplay(',')
    }
  }
}
document.getElementById('decimal').addEventListener('click', insertDecimal)

const mapaTeclado = {
  0: 'tecla0',
  1: 'tecla1',
  2: 'tecla2',
  3: 'tecla3',
  4: 'tecla4',
  5: 'tecla5',
  6: 'tecla6',
  7: 'tecla7',
  8: 'tecla8',
  9: 'tecla9',
  '/': 'operadorDividir',
  '*': 'operadorMultiplicar',
  '-': 'operadorSubtrair',
  '+': 'operadorAdicionar',
  '=': 'igual',
  Enter: 'igual',
  Backspace: 'backspace',
  c: 'limparDisplay',
  Escape: 'limparCalculo',
  ',': 'decimal',
}

const mapKeyboard = event => {
  const keyboard = event
  const permitedKey = () => Object.keys(mapaTeclado).indexOf(keyboard) !== -1
  if (permitedKey()) document.getElementById(mapaTeclado[keyboard]).click()
}
document.addEventListener('keydown', mapKeyboard)














// 'use strict'

// const display = document.getElementById('display')
// const numbers = document.querySelectorAll('[id*=tecla]')
// const operators = document.querySelectorAll('[id*=operador]')

// let newNumber = true 
// let operator
// let previousNumber

// const operationPending = () => operator !== undefined

// const calculate = () => {
//   if (operationPending()) {
//     const currentNumber = parseFloat(display.textContent.replace('.', '').replace(',', '.'))
//     newNumber = true
//     const result = eval(`${previousNumber}${operator}${currentNumber}`)
//     updateDisplay(result)
//   }
// }

// const updateDisplay = text => {
//   if (newNumber) {
//     display.textContent = text.toLocaleString('BR')
//     newNumber = false
//   } else {
//     display.textContent += text.toLocaleString('BR')
//   }
//   document.querySelector('#igual').focus()
// }

// const insertNumber = event => updateDisplay(event.target.textContent)
// numbers.forEach(numero => numero.addEventListener('click', insertNumber))

// const selectOperator = event => {
//   if (!newNumber) {
//       calculate()
//       newNumber = true
//       operator = event.target.textContent
//       previousNumber = parseFloat(display.textContent.replace('.', '').replace(',', '.'))
//   }
// }

// operators.forEach(operator => operator.addEventListener('click', selectOperator))

// const activateEqual = () => {
//   calculate()
//   operator = undefined
// }

// document.getElementById('igual').addEventListener('click', activateEqual)

// const clearDisplay = () => display.textContent = ''
// document.getElementById('limparDisplay').addEventListener('click', clearDisplay)

// const clearCalculate = () => {
//   clearDisplay()
//   operator = undefined
//   newNumber = true
//   previousNumber = undefined
// }
// document.getElementById('limparCalculo').addEventListener('click', clearCalculate)

// const removeLastNumber = () => (display.textContent = display.textContent.slice(0, -1))
// document.getElementById('backspace').addEventListener('click', removeLastNumber)

// const reverseSignal = () => {
//   newNumber = true
//   updateDisplay(display.textContent.length * -1)
// }
// document.getElementById('inverter').addEventListener('click', reverseSignal)

// const existDecimal = () => display.textContent.indexOf(',') !== -1
// const existValue = () => display.textContent.length > 0
// const insertDecimal = () => {
//   if (!existDecimal) {
//     if (newNumber) {
//       updateDisplay('0,')
//     } else {
//       updateDisplay(',')
//     }
//   }
// }
// document.getElementById('decimal').addEventListener('click', insertDecimal)


// const mapaTeclado = {
//   0: 'tecla0',
//   1: 'tecla1',
//   2: 'tecla2',
//   3: 'tecla3',
//   4: 'tecla4',
//   5: 'tecla5',
//   6: 'tecla6',
//   7: 'tecla7',
//   8: 'tecla8',
//   9: 'tecla9',
//   '/': 'operadorDividir',
//   '*': 'operadorMultiplicar',
//   '-': 'operadorSubtrair',
//   '+': 'operadorAdicionar',
//   '=': 'igual',
//   Enter: 'igual',
//   Backspace: 'backspace',
//   c: 'limparDisplay',
//   Escape: 'limparCalculo',
//   ',': 'decimal',
// };


// const mapKeyboard = event => {
//   const key = event.key 
//   const permitedKey = () => Object.keys(mapaTeclado).indexOf(key) !== -1
//   if(permitedKey()) document.getElementById(mapKeyboard[key]).click()
// }
// document.addEventListener('keydown', mapKeyboard)