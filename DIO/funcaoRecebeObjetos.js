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

function compararPessoa(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} e mais velha que ${p2.nome}`)
    }
}