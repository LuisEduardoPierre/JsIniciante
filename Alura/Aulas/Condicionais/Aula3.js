//Operacaoes truthy e falsy

//O javascript entende variaveis vazias mesmo que possuam um tipo de dado como falso, e true caso ela possua algum valor 
// por exemplo a variavel nome abaixo, mesmo possuindo o tipo string ela e considerada falsa,
// pois nao possui nenhum valor atribuido a ela, ja a variavel idade, 
// mesmo sendo do tipo number e possuindo o valor 0, ela e considerada falsa, 
// pois o valor 0 e considerado falso no javascript

const nome = 'Luis'
if(nome){
    console.log('Ola' + nome)
}else{
    console.log('O usuario nao possui nome cadastrado')
}

const idade = null;



if(idade != null){
    if(idade >= 18){
    console.log('O usuario e maior de idade')
}else{
    console.log('O usuario e menor de idade')
}
}