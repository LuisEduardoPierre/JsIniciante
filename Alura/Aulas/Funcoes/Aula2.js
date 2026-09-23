//Arrow functions
//Funcoes de "Flecha"

//Caso a funcao possua apenas uma linha de codigo podemos resumir a apenas
//uma linha a funcao
const saudacao = nome => console.log('Saudacoes meu querido(a) ' + nome)

saudacao("Luis")

const calcularDobro = (numero) => {
    return numero * 2
}

console.log(calcularDobro(4))