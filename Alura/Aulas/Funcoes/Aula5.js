//Capturando entrada de usuario
const readLine = require('readline')

const leitor = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual seu nome? ', (nome) =>{
    console.log('Olá',nome)
    console.log('Boas vindas ao sistema!!')
    leitor.question('Qual a sua idade? ', (idade) =>{
        if(idade >= 18){
            console.log('Uau, voce ja pode tirar carteira de habilitacao!!')
        }else{
            console.log('Que pena, ainda nao pode tirar a carteira de motorista :(')
        }
        leitor.close()
    })
    
})
