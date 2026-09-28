//Problema 1 e 2:
//Objeto pessoal e impressao

const pessoa = {
    nome: 'Luis',
    idade: 22,
    profissao: 'Programador'
}
// console.log(pessoa.nome)

//Problema 3:
//Atualizando idade
// pessoa.idade = 23

//Problema 4:
//Adicionando o atributo cidade
// pessoa.cidade = 'Anapolis'

//Problema 5:
//Criando funcao de saudacao
// function saudacao(nome,idade,profissao){
//     console.log('Ola ' + nome + ' voce tem ' + idade + ' anos? Eu tbm!! E voce e ' + profissao + ' como eu!! Que coincidencia!!')
// }

// saudacao(pessoa.nome,pessoa.idade,pessoa.profissao)

//Problema 6:
//array de objetos
// const pessoas = [{nome:'Luis',idade:10},{nome:'Michel', idade:20},{nome:'Breno',idade:'35'}]

//Problema 7:
//Percorrer e filtrar apenas os maiores de idade
// for (const pessoa of pessoas) {
//     if(pessoa.idade >= 18){
//         console.log(pessoa.nome)
//     }
        
// }

//Problema 8:
//Objeto de usuario
// const usuario = {
//     nome: 'Luis',
//     saudacao (nome){ 
//         console.log('Ola ' + this.nome)
//     }
// }

// usuario.saudacao()

//Problema 9:
//Listando propriedades do meu objeto

// for (const chave in pessoa) {
//     console.log('Chaves:', chave)
//     console.log('Valores:', pessoa[chave])
// }

//Problema 10:
//Calculo de compra

// const compra = {
//     preco: 10.86,
//     quantidade: 15
// }

// console.log('Preco da compra: ' + (compra.preco * compra.quantidade).toFixed(2))