//Nesse modulo tem a criacao de classes de forma dinamica instancioando os objetos
// Uma classe e a definicao de um item do mundo de forma generica, como pessoa por exemplo
class Pessoa {
    nome;
    idade;

    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    descrever() {
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`)
    }
}

//E a instancia e uma ocorrencia especifica daquele objeto
const luis = new Pessoa();
// console.log(luis)

//Podemos atribuir os valores da mesma forma que foi aprendido anteriormente
luis.idade = 21
luis.nome = `Luis Eduardo de Souza Pierre`
console.log(luis.nome)


