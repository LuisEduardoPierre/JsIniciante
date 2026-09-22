//Contar quantos numeros impares nos temos entre 0 e 100

let totalNumerosPares = 0;
let totalNumerosImpares = 0;

for(let contador = 0; contador <= 100; contador++){

//     if(contador % 2 == 0){
//         totalNumerosPares++;
//     }else {
//         totalNumerosImpares++;
//    }

//Pode ser resolvido de duas formas diferentes, apenas quis mostrar que ainda daria para fazer com o if ternario
    contador % 2 == 0 ? totalNumerosPares++ : totalNumerosImpares++
}

console.log('O total de numeros pares eh: ' + totalNumerosPares)
console.log('E o total de numeros impares eh: ' + totalNumerosImpares)