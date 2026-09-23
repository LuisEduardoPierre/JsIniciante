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
//Formula de Fibonacci => Fn = Fn-1 + Fn-2

// let fibonacci = 0;

// for(let contador = 0; contador < 15; contador++){

//     let numeroAnterior = contador;
//     let numeroAnterior2 = contador;

//     console.log(fibonacci)

//     numeroAnterior -= 1;
//     numeroAnterior2 -= 2;

//     if((numeroAnterior + numeroAnterior2) <= 0){
//         numeroAnterior = 0
//         numeroAnterior2 = 1
//     }

//     fibonacci = numeroAnterior + numeroAnterior2

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

//Há três formas de resolver esse problema
//definicao de uma constante para testes
// const ALTURA = 5;

//Primeira forma
//Funcao que repete os asteriscos
// for(let i = 1; i <= ALTURA; i++){
//     console.log('*'.repeat(i))
// }

//Segunda forma
//For aninhado
// for(let i = 1; i <= ALTURA; i++){

//     let linhaTexto = '';

//     for(let j = 1; j <= i; j++){
//         linhaTexto += '*';
//     }

//     console.log(linhaTexto);
// }

//Terceira Forma
//Acumulando a String em uma variavel

// let linhaTexto = '';

// for(let i = 1; i <= ALTURA; i++){
//     linhaTexto += '*';
//     console.log(linhaTexto)
// }

//Problema 6:
//Contador de notas de caixa

// let dinheiro = 287;
// let notas100 = 0;
// let notas50 = 0;
// let notas20 = 0;
// let notas10 = 0;
// let trocoEmMoedas = 0;
// let calculoNotas = dinheiro;

// while(calculoNotas > 0){
//     calculonotas
// }

//Problema 7:
//Contagem de soma de rolagens de dado onde o numero e igual a 7
// let dado1 = 0;
// let dado2 = 0;
// let contador = 0;

// for(let i = 0; i < 100; i++){
//     dado1 = Math.floor(Math.random() * 6) + 1
//     dado2 = Math.floor(Math.random() * 6) + 1

//     if(dado1 + dado2 == 7){
//         contador++
//     }
// }
// console.log('A quantidade de vezes que deu exatamente 7 eh: ' + contador)

//Problema 8:
//Jogo de adivinhacao invertido

// let numeroSecreto = 44;
// let numeroTentativas = 0;
// let tentativa;

// do{
//     tentativa = Math.floor(Math.random() * 99) + 1

//     if(tentativa != numeroSecreto){
//         numeroTentativas++;
//         if(tentativa > numeroSecreto){
//             console.log('O numero oferecido pela maquina eh maior que o numero secreto')
//         }else{
//             console.log('O numero oferecido pela maquina eh menor que o numero secreto')
//         }
//     }

// }while(tentativa != numeroSecreto)
// console.log('-'.repeat(100))
// console.log('O numero secreto era: ' + numeroSecreto)
// console.log('-'.repeat(100))
// console.log('Quantidades de tentativas realizadas pelo computador:' + numeroTentativas);

//Problema 9:
//Contador de meses de meta de investimento

// const APORTE = 200
// let reserva = APORTE;
// const RENDA = 0.5;
// let quantidadeMesesAteMeta = 0;

// while(reserva < 5000){

//     reserva = reserva + (reserva * RENDA);
//     reserva += APORTE;
//     quantidadeMesesAteMeta++;

// }

// console.log('Demorou ' + quantidadeMesesAteMeta + ' meses para o investidor alcancar a meta de 5000')
// console.log('Renda final: ' + reserva)

//Problema 10:
//Contador de Vogais

//Resolvendo com os pipes '||'
const PALAVRA = 'Jujustu Kaisen'
let contadorDeVogais = 0;
const VOGAIS = 'aeiou'

// for(let i = 0; i < PALAVRA.length; i++){

//     let letra = PALAVRA[i].toLowerCase()

//     if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
//         contadorDeVogais++;
//     }
// }

// console.log('Quantidade de vogais na palavra: ' + contadorDeVogais)

//Resolvendo com includes
// for(const LETRA of PALAVRA.toLowerCase()){
//     if(VOGAIS.includes(LETRA)){
//         contadorDeVogais++
//     }
// }
// console.log('Quantidade de vogais na palavra: ' + contadorDeVogais)