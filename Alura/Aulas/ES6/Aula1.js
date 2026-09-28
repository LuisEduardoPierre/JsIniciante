const agora = new Date()
//Data completa
console.log(agora)
//Coletando apenas o ano
console.log('Ano: ', agora.getFullYear())
//Coletando o mes
//Ps - O mes vai de 0 a 11
console.log('Mes 0-11:', agora.getMonth())
//Coletando o dia do mes
console.log('Dia do mes:' ,agora.getDate())
//Coletando a hora do mes
console.log('Hora:', agora.getHours)
//Coletando minutos
console.log('Minutos:', agora.getMinutes)

const nascimento = new Date(2004, 4, 7)
console.log(nascimento)

//Convertendo em data-hora local
console.log('Data formatada:', nascimento.toLocaleDateString('pt-BR'))