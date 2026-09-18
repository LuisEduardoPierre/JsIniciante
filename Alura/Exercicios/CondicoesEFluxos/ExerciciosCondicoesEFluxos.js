//Problema 1:
//Poderia ser resolvido com if/else mas na minha resolucao usei operador ternario, 
//que é uma forma mais enxuta de escrever um if/else, e funciona da seguinte forma:

// let idade = 18;

// idade >= 18 ? console.log("Pode comprar bebida alcoolica") : console.log("Venda proibida para menores de 18 anos");

//Problema 2:
//Compara a hora atual, e retonar "Bom dia!" se for entre 6 e 12,
//"Boa tarde!" se for entre 12 e 18,
//e "Boa noite!" se for entre 18 e 6.

// let horaAtual = 20;

// if (horaAtual >= 6 && horaAtual < 12) {
//     console.log("Bom dia!");
// } else if (horaAtual >= 12 && horaAtual < 18) {
//     console.log("Boa tarde!");
// }else{
//     console.log("Boa noite!");
// }

//Problema 3:
//Comparo um numero com 0 e verifico se ele e maior, menor ou igual e exibo a mensagem correspondente no console

// let numero = 0;

// if (numero > 0){
//     console.log("O número é positivo");
// }else if (numero < 0){
//     console.log("O número é negativo");
// }else{
//     console.log("O número é zero");
// }

//Problema 4:
//Recebe a nota de um aluno e depois compara a nota para atribuir um conceito de acordo com a tabela abaixo,
// e exibe o resultado no console

/*
Conceito das notas:
A(9-10)
B(8-9)
C(6-7.9)
D(4-5.9)
E(0-3.9)
*/

// let notaConceito = 8

// if (notaConceito >= 9 && notaConceito <= 10){
//     console.log("Nota A");
// } else if (notaConceito >= 8 && notaConceito < 9){
//     console.log("Nota B");
// } else if (notaConceito >= 6 && notaConceito < 7.9){
//     console.log("Nota C");
// } else if (notaConceito >= 4 && notaConceito < 5.9){
//     console.log("Nota D");
// } else {
//     console.log("Nota E");
// }

//Problema 5:
//Foi solicitado o uso de operador ternario para resolver esse problema,
// que recebe um numero e verifica se ele é par ou ímpar, 
// retornando a mensagem correspondente no console.

// let numero = 4;
// numero % 2 == 0 ? console.log("O número é par") : console.log("O número é ímpar");

//Problema 6:
//Utiliza o switch e case para simular um menu de opções,
//onde o usuário escolhe uma opção e o programa exibe a mensagem correspondente no console.

// let opcao = 1;

// switch(opcao){
//     case 1:
//         console.log("Cadastrar");
//         break;
//     case 2:
//         console.log("Listar");
//         break;
//     case 3:
//         console.log("Sair");
//         break;
//     default:
//         console.log("Opção inválida");
//         break;
// }

//Problema 7:
//Pede para o usuário digitar um email, e verifica se o email é valido ou não

// let email = ""

// if(email){
//     console.log("Insira um email valido");
// }else{
//     console.log("Email valido");
// }

//Problema 8:
//Nao vi sentido em fazer mas vou executar do mesmo jeito

// let senha = '123456';
// let senhaValida = true;

// if(senha && senhaValida){
//     console.log("Senha valida");
// }else{
//     console.log('Senha muito curta')
// }

//Problema 9:
//O problema pede para verificar se o saldo disponível é maior ou igual ao valor da compra,
// e exibir a mensagem "Compra aprovada" caso seja verdadeiro, ou "Saldo insuficiente" caso seja falso.

// let saldoDisponivel = 120;
// let valorCompra = 100;

// if(saldoDisponivel >= valorCompra){
//     console.log("Compra aprovada");
// }else {
//     console.log("Saldo insuficiente");
// }

//Problema 10:
//Recebe os dados de um formulário e verifica se todos os campos foram preenchidos,
// caso todos os campos estejam preenchidos, exibe a mensagem "Formulário enviado com sucesso!",
// caso contrário, exibe a mensagem "Preencha todos os campos do formulário!".

let nome = '';
let email = '';
let idade = 0;
let formularioValido = true;

if(formularioValido){
    if(nome && email && idade){
        console.log("Formulário enviado com sucesso!");
    }else{
        console.log("Preencha todos os campos do formulário!");
    }
}