const frutas = ['Maçã', 'banana', 'goiaba'];
const maisFrutas = ['Uva', 'Morango', 'Kiwi'];
//Assim como observado em objetos anteriormente, podemos fazer o clone de arrays
const clone = [...frutas]
let todasAsFrutas = [...frutas,...maisFrutas]
frutas.push('Pitanga')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasAsFrutas)

//Posso isolar apenas os itens que quero assim como nos objetos
const [primeira, segunda, ...restante] = todasAsFrutas
console.log(primeira)
console.log(segunda)
console.log(restante)