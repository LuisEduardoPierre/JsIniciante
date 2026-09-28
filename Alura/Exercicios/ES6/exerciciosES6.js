//Problema 1:
//Destructuring em objetos
const pessoa = {
    nome: 'Luis',
    idade: 34,
    email:'pplpierre20@gmail.com'
}

const {nome} = pessoa
const {idade} = pessoa
const {email} = pessoa

//Problema 2:
//Destructuring em arrays
const linguagens = ['Java','Javascript','Cobol']

const [ling1,ling2,ling3] = linguagens

//Problema 3:
//Rest operator em funcoes
// const numeros =[1,2]
// function somar(num1,num2){
    
//     return num1 +  num2
// }

// let resultado = somar([...numeros])
// console.log(resultado)

//Problema 4:
//Unindo dois arrays com spread

// const frutas1 = ['banana','maca']
// const frutas2 = ['Manga','abrico']

// const frutasUnidas = [...frutas1, ...frutas2]
// console.log(frutasUnidas)

//Problema 5:
//Unindo Objetos

// const obj1 = {
//     nome:'Luis'
// }
// const obj2 ={
//     idade: 23
// }

// let objsUnidos = {...obj1, ...obj2}

// console.log(objsUnidos)

//Problema 6:
//Funcao com default
// function saudacao(nome='Visitante'){
//     console.log('Ola, ' + nome)
// }
// saudacao('Luis')

//Problema 7:
//Exibindo data em formato local
// let data = new Date()
// console.log(data.toLocaleDateString('pt-BR'))

//Problema 8:
//N'ao irei fazer essa de importacao e exportacao, ja me acostumei

