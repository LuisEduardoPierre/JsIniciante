//Lacos de repeticao para Arrays

const marcasDeCarro = ['Volkswagen','Hyundai','Toyota','Mitsubishi','Fiat']

//console.log(marcasDeCarro)
//marcasDeCarro.splice(2,1) //Esse metodo remove um elemento na posicao desejada e 
//a quantidade de elementos desejado, podendo substituir por outro elemento
//console.log(marcasDeCarro)


//for(let i = 0; i < marcasDeCarro.length; i++){
//  console.log(marcasDeCarro[i])
//}

//Impressao com forEach
//Como funciona, ele recebe uma funcao de callback, onde na funcao vc pode so resgatar o valor
//ou o valor e o indice, a funcao executa para cada item dentro de um array

//P.S -> So funciona com Arrays

// marcasDeCarro.forEach((valor, indice) => {
//    console.log('Indice:', indice, valor)
// )

//Usando for(let variavel of lista) eh a mesma coisa, podemos inclusive substituir
//no caso do for normal, porque ele percorre da mesma forma

//Pode ser usado com outros tipos de dados

//for(const carro of marcasDeCarro){
//    console.log(carro)
//}