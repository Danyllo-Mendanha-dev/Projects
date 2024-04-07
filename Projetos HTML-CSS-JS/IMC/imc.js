const calcular = document.getElementById('calcular')

const returnClassification = valueIMC => {
  let classification = ''

    classification = valueIMC < 18.5 ? 'abaixo do peso' :
    valueIMC < 25 ? 'com peso normal' :
    valueIMC < 30 ? 'com sobrepeso':
    valueIMC < 35 ? 'com obesidade grau I':
    valueIMC < 40 ? 'com obesidade grau II':
      'com obesidade grau III'
  
  return classification
}

const handleMessageImc = (name, heigth, weight, result) => {
  const spaceIsFilled = name !== '' && heigth !== '' && weight !== ''

  if (spaceIsFilled){
    
    const valueIMC = (weight / (heigth * heigth)).toFixed(1)
    const classification = returnClassification(valueIMC)

    result.textContent = `${name} seu IMC é ${valueIMC} e você está ${classification}`

  } else {
    result.textContent = 'Obs: Preencha todos os campos'
  }
}

const imc = () => {
  const name = document.getElementById('nome').value
  const heigth = document.getElementById('altura').value
  const weight = document.getElementById('peso').value
  const result = document.getElementById('resultado')

  handleMessageImc(name, heigth, weight, result)
}

calcular.addEventListener('click', imc)