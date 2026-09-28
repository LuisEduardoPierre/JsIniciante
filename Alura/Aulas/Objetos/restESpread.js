let camila1 = {
    nome: 'Camila',
    idade: 23,
    profissao: 'Desenvolvedora'
}

//Operador Spread
//Quer dizer que voce espalha os atributos de um objeto em outro sem um estar vinculado a outro
const camila2 = {...camila1}

//Operador de Resto ou REST
const {nome, ...resto} = camila1
console.log(nome)
console.log(resto)