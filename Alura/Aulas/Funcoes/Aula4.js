//Funcoes Globais
//Executa um bloco de código apos determinado tempo definido por nos tenha passado
function saudacao (){
    console.log('Hello Young Lady')
}

setTimeout(saudacao, 2000)

//Contador com o setInterval()

let contador = 0;
const id = setInterval(() => {
    contador++
    console.log('Tempo decorrido em segundos:', contador)
    if(contador == 10){
        clearInterval(id)
    }
        
}, 1000)