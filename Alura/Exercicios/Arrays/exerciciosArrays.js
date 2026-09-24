//Problema 1:
//Imprimir lista de nomes

// const NOMES = ['Luis','Marcos','Felipe','Eduardo','Carlos']

// for(const nome of NOMES){
//     console.log(nome)
// }

//Problema 2:
//Adicionar e remover itens

// const FRUTAS = ['banana','maca','laranja','melao','tamarindo']

// console.log(FRUTAS)
// FRUTAS.push('MamaCadela')
// FRUTAS.shift()
// console.log(FRUTAS)

//Problema 3:
//Contar quantidade itens array

// const CIDADES = ['Juazeiro', 'Petrolina', 'Anapolis', 'Goiania', 'Porto Velho']

// console.log('Quantidade de cidades no array: ' + CIDADES.length)

//Problema 4:
//Somar todos o numeros de um array

// const NUMEROS = [1,2,3,4,5,6,7,8,9,10]
// let soma = 0

// NUMEROS.forEach((numero) => {
//     soma += numero
// })
// console.log('Resultado da soma: ' + soma)

//Problema 5:
//Media de Notas

// const NOTAS = [6.3, 7.5, 9.8, 8.4]

// let resultado = 0

// NOTAS.forEach((nota) => {
//     resultado += nota
// })
// resultado = resultado / NOTAS.length

// if(resultado >= 7){
//     console.log('Aprovado')
// }else{
//     console.log('Reprovado')
// }
// console.log('Nota final: ' + resultado)

//Problema 6:
//Mensagens personalizadas com forEach

// const NOMES = ['Luis','Marcos','Felipe','Eduardo','Carlos']

// NOMES.forEach((nome) => {
//     console.log('Hello, ' + nome)
// })

//Problema 7:
//Descontos com map()

// const PRECOS_PRODUTOS = [20.99, 5.57, 4.82, 9.99, 32.50]

// const PRECOS_COM_DESCONTO = PRECOS_PRODUTOS.map((precos) =>{
//     return +(precos += precos * 0.1).toFixed(2) //Conversao implicida de string para numer usando o caracter '+'
//     // ja que o metodo .toFixed() acaba por transformar number em string
// })

// console.log(PRECOS_COM_DESCONTO)

//Problema 8:
//Filtrar valores altos

// const IDADES = [20, 15, 69, 54, 13, 24, 11]

// let idadesAcimaDe18 = IDADES.filter((idade) =>{
//     return idade >= 18
// })

// console.log(idadesAcimaDe18)

//Problema 9:
//Valor total da compra do carrinho

// const PRECOS_PRODUTOS = [20.99, 5.57, 4.82, 9.99, 32.50]

// let totalCompra = 0
// let desconto = 0.2

// for(const preco of PRECOS_PRODUTOS){
//     totalCompra += preco 
// }
// totalCompra  = totalCompra + (totalCompra * desconto)

// console.log('O valor total da compra eh: ' + Number(totalCompra.toFixed(2)))

//Problema 10:
//Lista de tarefas

// const TAREFAS = ['Lavar Carro', 'Alimentar o cachorro', 'Molhar as plantas', 'Fazer o almoco']
// const CONCLUIDO = [true, true, false, false]

// let tarefasPendentes = TAREFAS.filter((tarefa, index) => {
//     return CONCLUIDO[index] === false
// })
// console.log('tarefas pendentes: ', tarefasPendentes)
