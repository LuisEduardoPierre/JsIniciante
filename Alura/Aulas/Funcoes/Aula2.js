//Arrow functions
//Funcoes de "Flecha"

//Caso a funcao possua apenas uma linha de codigo podemos resumir a apenas
//uma linha a funcao

//P.S -> Vale lembrar que arrow functions tem retorno implicito ou seja,
// nao precisamos da palavra reservada return
const saudacao = nome => console.log('Saudacoes meu querido(a) ' + nome)

saudacao("Luis")

const calcularDobro = (numero) => {
    return numero * 2
}

console.log(calcularDobro(4))