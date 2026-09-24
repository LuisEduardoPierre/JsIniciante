//Lista de atividades

//Problema 1:
//Funcao de saudacao

// function saudacao(){
//     console.log('Hello!, Be welcome!!')
// }

// saudacao()

//Problema 2:
//Funcao com parametros

// function apresentarPessoa(nome, idade){
//     console.log("Hello!, my name is " + nome+ " and i'm " + idade + " years old")
// }

// apresentarPessoa('Luis', 22)

//Problema 3:
//Calculo de IMC

// function calcularIMC(peso, altura){
//     return IMC = peso / (altura ** 2) //Relembrando, o operador ** eh um operador de potencia
// }

// let resultadoIMC = calcularIMC(80, 1.82)
// console.log('Seu IMC (Indice de Massa Corporal) eh: ' + resultadoIMC.toFixed(1))

//Problema 4:
//Funcao de verificacao de aprovacao

// function verificaAprovacao(nota){
//     return nota >= 7 ? "Aprovado" : "Reprovado"
// }

// let resultadoSemestre = verificaAprovacao(8)

// console.log('Resultado do semestre: ' + resultadoSemestre)

//Problema 5:
//Funcao que verifica numero par ou impar

// function ehPar(numero){
//     return numero % 2 == 0 ? true : false
// }

// let numero = 5
// let resultadoEhPar = ehPar(numero)
// console.log('O numero ' + numero + ' eh par?: ' + resultadoEhPar)

//Problema 6:
//Funcao de soma que retornar frase no final da execucao

// function soma(numero1, numero2){
//     return numero1 + numero2
// }
// let num1 = 3
// let num2 = 5
// let resultadoSoma = soma(num1, num2)

// console.log('O resultado da soma: ' + resultadoSoma)

//Problema 7:
//Funcao de calculo de notas
// function calcularTroco(valorCompra, valorPago) {
//   let troco = valorPago - valorCompra;
//   return troco;
// }

// let resultadoTroco = calcularTroco(35.9, 50);
// console.log("Troco: R$ " + resultadoTroco);


//Problema 8:
//Reduzindo Problema 6 com uma arrow function

// let soma = (numero1,numero2) => numero1 + numero2

// console.log('O resultado da soma: ' + soma)

//Problema 9:
//Callback simples

// function executarAcao(acao){
//     return acao(acao)
// }

// function acaoExecutada(){
//     console.log('Consegui fazer um callback')
// }

// executarAcao(acaoExecutada)

//Problema 10:
//Quiz com funcao

// function fazerPergunta(pergunta,respostaCorreta){

//     let respostaUsuario = respostaCorreta

//     if(respostaUsuario === respostaCorreta){
//         console.log('Acertou!!')
//     }else{
//         console.log('Errooou!!')
//     }
// }

// fazerPergunta("Qual a capital do Brasil?", "Brasilia")