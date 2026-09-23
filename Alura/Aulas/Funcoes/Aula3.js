//Callback e HOF

//HOF -> Higher Order Function, é uma função que recebe outa função como parâmetro
//Pode ser tanto arrow function quanto funcao normal

function calcular(num1, num2, operacao) {
    return operacao(num1, num2)
}

function soma(num1,num2){
    return num1 + num2
}

function divisao(num1,num2){
    return num1 / num2
}

const resultadoSoma = calcular(3, 8, soma)
console.log('Resultado da soma: ' + resultadoSoma)

const resultadoDivisao = calcular(32,8, divisao)
console.log('Resultado da divisao: ' + resultadoDivisao)