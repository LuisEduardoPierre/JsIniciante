const pessoa = {
    nome: 'Nathália',
    idade: 19,
    profissao: 'Estudante'
};

//Impressao normal
// console.log(pessoa.nome)
// console.log(pessoa.idade)

//Aplicando o destructuring
//note que voce deve escrever o tipo de variavel const ou let
//adicione as chaves que te interetessam, nesse caso nome e idade
// e apos a virgula o objeto que voce esta recebendo, nesse caso pessoa

const {nome, idade} = pessoa

// console.log(nome)
// console.log(idade)

//Usamos o destructuring para poder acessar elementos de um objeto de forma mais facil
//quando o objeto e muito grande ou quando fica muito dificil ler seus campos
//Podemos usar eles como paramtros de uma funcao desestruturando o objeto e passando o campo que queremos

// function saudacao({nome, idade}){
//     console.log(nome)

//     if(idade >= 18){
//         console.log('Pode ter CNH')
//     }
// }

// saudacao(pessoa)


