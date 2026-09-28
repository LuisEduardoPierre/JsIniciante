
//const readLine = require('readline') //Desta forma em modulos nao funciona
import { createInterface } from 'node:readline'
import { soma, subtracao } from './AulaModulos.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite o primeiro numero:\n>', (numero1) =>{

    leitor.question('Digite a operacao:\n+: Soma\n-: Subtração\n>', (operacao) =>{
        leitor.question('Digite o segundo numero: \n> ', (numero2) =>{

            const num1 = Number(numero1)
            const num2 = Number(numero2)
            let resultado = null

            if(operacao == '+'){
                resultado = soma(num1,num2)
            }else if(operacao == '-'){
                resultado = subtracao(num1,num2)
            }else{
                console.log('Operacao Invalida')
            }

            if(resultado != null){
                console.log('O resultado da operacao eh: ' + resultado)
            }
            leitor.close()
        })
        
    })
    
})