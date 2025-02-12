let inputValues = (document.querySelector('#numbers'))
let insertValues = document.querySelector('#inserir')
let result = document.querySelector('#Resultado')
let areaResult = document.querySelector('#area-resultado')

const values = [];

insertValues.addEventListener('click', () => {
    areaResult.innerHTML = ''
    if (inputValues.value < 1 || inputValues.value > 100 || inputValues.value.length == 0) {
        alert('Inseira um valor entre 1 e 100')
        inputValues.value = ''
        return inputValues.focus()
    }
    if(inputValues.value.length > 3) {
        alert('Permitido somente numeros inteiros')
        inputValues.value = ''
        return inputValues.focus()
    }
    for (let cont = 0; cont < values.length; cont++) {
        if (values[cont] == inputValues.value) {
            alert('Valor já inserido')
            inputValues.value = ''
            return inputValues.focus()
        }
    }
    values.push(Number(inputValues.value))
    inputValues.value = ''
    inputValues.focus()
    console.log(values)
})

result.addEventListener('click', () => {
    areaResult.innerHTML = ''
    if (values.length == 0) {
        alert('Insira valores no Input')
        inputValues.value = ''
        return inputValues.focus()
    }
    let maior = Math.max(...values)
    let menor = Math.min(...values)
    let primeiro = values[0]
    let ultimo = values[values.length - 1]
    let soma = values.reduce((a, b) => a + b)
    let media = values.reduce((a, b) => a + b) / values.length
    
    let valuesInsert = document.createElement('p')
    valuesInsert.innerHTML = `<br> Total de valores inseridos: ${values.length}`
    valuesInsert.innerHTML += `<br>Os valores inseridos foram:  ${values.join(', ')}`
    valuesInsert.innerHTML += `<br> O maior valor inserido foi: ${maior}`
    valuesInsert.innerHTML += `<br> O menor valor inserido foi: ${menor}`
    valuesInsert.innerHTML += `<br> O primeiro valor inserido foi: ${primeiro}`
    valuesInsert.innerHTML += `<br> O ultimo valor inserido foi: ${ultimo}`
    valuesInsert.innerHTML += `<br> A soma dos valores inseridos é: ${soma}`
    valuesInsert.innerHTML += `<br> A media dos valores inseridos foi: ${media.toFixed(3)}`
    areaResult.appendChild(valuesInsert)
    
    
})
inputValues.focus()
