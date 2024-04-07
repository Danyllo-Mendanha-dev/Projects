'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2)


const calcularSegundos = tempo => {
    return tempo % 60
}

const calcularMinutos = tempo => {
    return Math.floor((tempo % (60 * 60)) / 60)
}

const calcularHoras = tempo => {
    return Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
}

const calcularDias = tempo => {
    return Math.floor(tempo / (60 * 60 * 24))
}

const calcularTempo = tempo => {
    const qtdSegundos = calcularSegundos(tempo)
    const qtdMinutos = calcularMinutos(tempo)
    const qtdHoras = calcularHoras(tempo)
    const qtdDias = calcularDias(tempo)

    return {qtdSegundos, qtdMinutos, qtdHoras, qtdDias}
}

const atualizar = tempo => {
    const segundos = document.getElementById('segundos')
    const minutos = document.getElementById('minutos')
    const horas = document.getElementById('horas')
    const dias = document.getElementById('dias')

    const {qtdSegundos, qtdMinutos, qtdHoras, qtdDias} = calcularTempo(tempo)

    segundos.textContent = formatarDigito(qtdSegundos)
    minutos.textContent = formatarDigito(qtdMinutos)
    horas.textContent = formatarDigito(qtdHoras)
    dias.textContent = formatarDigito(qtdDias)
}

const contagemRegressiva = tempo => {
    const pararContagem = () => clearInterval(id)

    const contar = () => {
        if (tempo === 0 ){
            pararContagem()
        }
        atualizar(tempo)
        tempo--
    }
    const id = setInterval(contar,1000)
}

const tempoRestante = () => {
    // 1 de janeiro de 1970
    const dataEvento = new Date ('2020-10-26 20:00:00')
    const hoje = Date.now()
    return Math.floor((dataEvento - hoje) / 1000)
}

contagemRegressiva(tempoRestante())
// 'use strict'

// const formatDigit = digit => `0${digit}`.slice(-2)

// const update = time => {
//   const seconds = document.getElementById('segundos')
//   const minutes = document.getElementById('minutos')
//   const hours = document.getElementById('horas')
//   const days = document.getElementById('dias')

//   const qtdSeconds = time % 60
//   const qtdMinutes = Math.floor((time % (60 * 60)) / 60)
//   const qtdHours = Math.floor(time % (60 * 60 * 24) / (60 * 60))
//   const qtdDays = Math.floor(time / (60 * 60 * 24))

//   seconds.textContent = formatDigit(qtdSeconds)
//   minutes.textContent = formatDigit(qtdMinutes)
//   hours.textContent = formatDigit(qtdHours)
//   days.textContent = formatDigit(qtdDays)
// }

// const countDown = time => {
//   const StopCountDown = () => clearInterval(id)

//   const count = () => {
//     if (time === 0) {
//       StopCountDown()
//     }
//     update(time)
//     time--
//   }
//   const id = setInterval(count, 1000)
// }

// const timeRemaining = () => {
//   const dateEvent = new Date('2020-10-26 20:00:00')
//   const today = Date.now()
//   return Math.floor((dateEvent - today) / 1000)
// }

// countDown(timeRemaining())