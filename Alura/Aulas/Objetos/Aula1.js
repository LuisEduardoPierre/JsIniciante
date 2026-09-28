const pessoa = {
    nome: 'Ana',
    idade: '29',
    temCNH: true,
}

pessoa.sobrenome = 'Paula'

//console.log('Nome da pessoa: ' , pessoa.nome)

//Como pode ser observado,
//Se tentarmos acessar um item ainda nao existente em
//um objeto na verdade estaremos criando aquele atributo dentro desse objeto
//Como foi no caso de pessoa.sobrenome, e de livro.publicado.
//E assim como as estruturas de dados que foram estudadas previamente
//Elas podem ser alteradas dentro de um objeto com as funcoes que aprendemos anteriormente

const livro = {
    titulo: 'O Hobbit',
    paginas: 320
}

livro.publicado = true
livro.idiomas = [ 'Ingles', 'Portugues', 'Espanhol']

//Alterando um atributo usando o metodo push de listas
livro.idiomas.push('Deutch')
livro.idiomas.push('Sweden')

console.log('Livro antes da atualizacao: ', livro)

//Podemos deletar atributos de um objeto com o metodo delete

delete livro.paginas

console.log('Livro depois: ', livro)

//Eh possivel acessar elementos de um objeto da seguinte forma tambem
//onde ao inves de chamar a chave com '.' podemos chamar escrevendo explicitamente entre aspas
//o nome do atributo
console.log('Autor: ', livro['autor'])

//Eh possivel tambem aninhar objetos

const autor = {
    nome: 'J. R. R. Tolkien',
    idade: 98,
    nacionalidade: 'British'
}

livro.autor = autor
console.log(livro)

//E agora, como acesso os dados de autor?
//Da seguinte forma

console.log(livro.autor.nome)