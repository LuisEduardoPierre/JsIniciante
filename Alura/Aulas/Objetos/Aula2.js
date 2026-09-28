const pessoa = {
    nome: 'Luis',
    idade: 22, 
    pets: ['Lua','Berenice'],
    nacionalidade: 'Brasileiro'
}

//Acessando todas as chaves e valores de um objeto usando o "for in"
// for(const chave in pessoa){
//     // console.log('Chave: ',chave)
//     // console.log('Valor: ', pessoa[chave] )
// }

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)

const entradas = Object.entries(pessoa)

console.log('Chave: ',chaves)
console.log('Valores: ',valores)
console.log('Entradas: ',entradas)