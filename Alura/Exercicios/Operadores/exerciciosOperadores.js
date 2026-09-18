//Problema 1:
//Usa operadores de comaparação para verificar se a idade fornecida é maior o igual a 18, retornando true ou false

// let idade = 15;
// let maioridade = idade >= 18;

// console.log(maioridade)

//Problema 2:
//Recebe duas notas de um aluno, calcula a media e verifica se a media eh maior ou igual a 7, retornando true ou false

// let nota1 = 6.8;
// let nota2 = 6.6;
// let media = (nota1 + nota2)/2;
// let resultado = media >= 7;

// console.log(resultado)

//Problema 3:
//Recebe o valor de uma compra e o valor pago, calcula o troco e exibe o resultado no console

// let valorCompra = 35.90;
// let valorPago = 50.00;
// let troco = valorPago - valorCompra;

// console.log(`O troco a ser devolvido é de R$ ${troco.toFixed(2)}`)

//Problema 4:
//Recebe duas senhas e verifica se são iguais, retornando true ou false

//Sobre o operador "===", esse operador compara o valor e o tipo da variável,
// ou seja, se forem diferentes tipos de dados, mesmo que os valores sejam iguais, ele retornará false.
// Já o operador "==", compara apenas o valor da variável, ou seja, se forem diferentes tipos de dados, 
// mas com valores iguais, ele retornará true.

// let senha1 = "123456";
// let senha2 = "123456";
// let senhasIguais = senha1 === senha2;

// console.log(senhasIguais)

//Problema 5:
//Recebe o total de aulas e o número de faltas de um aluno, 
// calcula o percentual de faltas e verifica se é menor ou igual a 25%, retornando true ou false

// let totalAulas= 40;
// let faltas = 10;
// let percentualFaltas = 0.25;
// let resultado = (faltas / totalAulas) <= percentualFaltas;

// console.log(resultado)

//Problema 6:
//Recebe dois valores booleanos, verifica se ambos são verdadeiros e retorna true ou false

// let temLogin = true;
// let temSenha = false;
// let podeAcessar = temLogin && temSenha;

// console.log(podeAcessar)

//Problema 7:
//Apenas nega um valor de uma variavel utilizando o operador "!" e exibe o resultado no console

// let disponivel = true;
// console.log(!disponivel)

//Problema 8:
//Recebe dois números, verifica se ambos são pares e se são iguais, retornando true ou false

// let numero1 = 10;
// let numero2 = 6;
// let resultadoPares = (numero1 % 2 == 0) && (numero2 % 2 == 0);
// let resultadoIguais = (numero1 == numero2);

// console.log('O numeros sao pares?', resultadoPares);
// console.log('Os numeros sao iguais?', resultadoIguais);

//Problema 9:
//Recebe um valor e calcula 15% desse valor, exibindo o resultado no console

// let porcentagem = 0.15;
// let numero = 120;
// let valorPorcentagem = numero * porcentagem;
// console.log('15% de 120 é:', valorPorcentagem)

//Problema 10:

// console.log(2 + 3 * 5)
// let operacaoCorreta = (2 + 3) * 5
// console.log(operacaoCorreta)

//A primeira operacao tem valor diferente da segunda pois a ordem e definida por tipo de operador.
//O operador "*" tem precedencia sobre o operador "+", portanto a multiplicacao e feita primeiro, depois a soma.
//Caso deseje ser executado a soma primeiro que a multiplicacao,
// deve-se utilizar parenteses para definir a ordem de execucao das operacoes.
