//Problema 1:
//Tabela de conversao de celsius para fahrenheit

// let grausCelsius = 0;

// for(let contador = 0; contador <= 100; contador+=10){
//     grausCelsius += contador
//     console.log(grausCelsius + '°C' + ' = ' + (grausCelsius * 9 / 5 + 32) + '°F')
// }

// Problema 2:
// Calculo de fatorial de um numero

// let numero = 5;
// let somaFatorial = 1;
// let contador = numero

//Resolvido com FOR
// for(let contador = numero; contador > 0; contador--){

//     somaFatorial *= contador;

//     if(numero == 0){

//         somaFatorial = 1;

//     }
// }

//Resolvido com While
//Diferenca, temos que decrementar o valor na mao e nos atentar a verificacao inicial realizada pelo while
//antes de ele realizar qualquer loop no codigo

// while(contador > 0){
//     somaFatorial *= contador;
//     contador--
// }

// console.log(somaFatorial)

//Problema 3: INCOMPLETO
//Sequencia de Fibonacci

// let fibonacci = 0;
// let numeroAnterior = 0;
// let numeroAnterior2 = 0;

// for(let contador = 0; contador < 15; contador++){

//     // console.log('Primeiros 15 numeros de fibonacci:' + fibonacci)
//     if(contador > 0 ){
//         numeroAnterior = contador - 1
//     }
    
//     console.log(fibonacci = contador + numeroAnterior)

// }

//Problema 4:
//Soma de digitos de um numero

// let numero = 4821
// let digitosNumero = []
// let temporario = numero
// let soma = 0

// while(temporario > 0){

//     digitosNumero.unshift(temporario % 10)
//     temporario = Math.floor(temporario / 10)

// }

// for(let contador = 0; contador < digitosNumero.length; contador++){

//     soma += digitosNumero[contador]
// }
// console.log(soma)

//Problema 5:
//Piramide de asteriscos

let altura = 5

for(let i = 1; i <= altura; i++){
    for(let j = 1; j <= altura - 1; j++){
        console.log('*')
    }
}
