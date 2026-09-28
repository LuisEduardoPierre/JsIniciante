//Funcoes construtoras nos isentam de escrever o mesmo codigo para declarar um objeto
//Por exemplo

// const livro1 = { titulo: 'O guia do mochileiro das galáxias', autor: 'Douglas Adams' }
// const livro2 = { titulo: 'Duna', autor: 'Frank Herbert' }
// const livro3 = { titulo: 'Neuromancer', autor: 'William Gibson' }

//Escrever esses tres eh de boa, porque sao poucos, mas se forem muitos o processo fica massante e 
//ineficiente, portanto para isso existem as funcoes construtoras

function Livro(titulo, autor) {
  this.titulo = titulo
  this.autor = autor
}

//Agora quando eu quiser criar um novo objeto,basta eu fazer da seguinte forma
//declaro uma constante com a palavra reservada "new" e usamos o template que definimos anteriormente
//quando fazemos a declaracao por "new", o js identifica que e a chamada de criacao de um objeto e 
//atribui o this dentro desse objeto, possibilitando que acessemos os atributos internamente do mesmo

const livro1 = new Livro('O guia do mochileiro das galáxias', 'Douglas Adams')
const livro2 = new Livro('Duna', 'Frank Herbert')

console.log(livro1.titulo) // O guia do mochileiro das galáxias
console.log(livro2.autor)  // Frank Herbert

//Exemplo 2
function Livro(titulo, autor) {
  this.titulo = titulo
  this.autor = autor

  this.ficha = function () {
    return `${this.titulo}, de ${this.autor}`
  }
}

const livro = new Livro('Neuromancer', 'William Gibson')
console.log(livro.ficha()) // Neuromancer, de William Gibson