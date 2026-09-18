//Pode ser declarado literalmente dessa forma
//Um objeto e um conjunto dinamico de dados chave/valor
const luis = {
    nome: 'Luis Eduardo de Souza Pierre',
    idade: 21,
    altura: 1.8,

    descrever: function (){
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`)
    }
}
console.log(luis.nome)

console.log(luis)//Muito util para saber oque vem dentro do objeto que esta sendo consultado

//Ou podemos incrementar mais campos dinamicamente ao objeto
luis.feliz = false
console.log(luis.feliz)

//Objetos podem tamber ter funssao que chamamos de metodo
//pode ser declarado como mostrado no objeto original
luis.descrever()

//Ou pode ser declarado dinamicamente
luis.sonho = function(){
    console.log(`Meu sonho e um dia ter uma pessoa que realmente me ame`)
}
//E pode ser chamado normalmente
luis.sonho()

//Os valores da classe tambem podem ser resgatados de outra forma
//Basicamente oque voce ja esta acostumado a acessar em python da mesma forma
//Oque se resume a um JSON
const atributoIdade = 'idade'
console.log(luis[atributoIdade])