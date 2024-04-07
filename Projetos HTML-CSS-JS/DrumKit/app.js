'use strict'

const sons = {
  'A': 'boom.wav',
  'S': 'clap.wav',
  'D': 'hihat.wav',
  'F': 'kick.wav',
  'G': 'openhat.wav',
  'H': 'ride.wav',
  'J': 'snare.wav',
  'K': 'tink.wav',
  'L': 'tom.wav',
}

const container = document.getElementById('container')

const createDiv = text => {
    const div = document.createElement('div')
    div.classList.add('key')
    div.textContent = text
    div.id = text
    container.appendChild(div)
}

const show = sons => Object.keys(sons).forEach(createDiv)

const playSound = letter => {
  const audio = new Audio(`./sounds/${sons[letter]}`)
  audio.play()
}

const addEffect = letter => 
    document.getElementById(letter).classList.toggle('active')  

const removeEffect = letter => {
  const div = document.getElementById(letter)
  const removeActive = () => div.classList.remove('active')
  div.addEventListener('transitionend', removeActive)
}

const activateDiv = event => {
  const letter = event.type === 'click' ? event.target.id : event.key.toUpperCase()

  const permittedLetter = sons.hasOwnProperty(letter)

  if (permittedLetter) {
    addEffect(letter)
    playSound(letter)
    removeEffect(letter)
  }
}

show(sons)
container.addEventListener('click', activateDiv)

window.addEventListener('keyup', activateDiv)