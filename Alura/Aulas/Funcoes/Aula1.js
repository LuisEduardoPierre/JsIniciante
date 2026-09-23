
//Parametro eh a variavel definida na declaracao da funcao
//ou seja nesse caso o parametro dessa funcao eh "nome"
function saudacao(nome) {
    console.log('Ola,'+ nome)
}

//Argumento eh o que passamos dentro da chamada da funcao
//o argumento passado nessa chamada eh "Luis"
saudacao("Luis")

function calcularDobro(numero){
    return numero * 2
}

const NUMERO_DOBRADO = calcularDobro(4)
console.log(NUMERO_DOBRADO)
