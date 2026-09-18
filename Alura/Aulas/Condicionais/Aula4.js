//Escala de notas

/*
entre 9 e 10 - Excelente
entre 7 e 8 - Boa nota
entre 5 e 6 - Nota mediana
entre 0 e 4 - Nota ruim
*/

//Utilizando o switch case para verificar a nota do aluno
const notaAluno = 8;
//Fato interessante, o case pode ser "Empilhado", ou seja, 
// podemos ter mais de um case para o mesmo bloco de código, 
// como no exemplo abaixo, onde os cases 10 e 9 executam o mesmo bloco de código, 
// assim como os cases 8 e 7, e os cases 6 e 5.

switch(notaAluno){
    case 10:
    case 9:
        console.log("Excelente nota!");
        break;
    case 8:
    case 7:
        console.log("Boa nota!");
        break;
    case 6:
    case 5:
        console.log("Nota mediana!");
        break;
    default:
        console.log("Nota ruim!");
        break;
}