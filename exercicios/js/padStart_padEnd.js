//Métodos estáticos utilizados em strings
//Recebe dois parâmetros: quantidade de caracteres e qual caracter
let codigo = "1000"
codigo = codigo.padStart(10, "*")
console.log(codigo)

let codigo2 = "1000"
codigo2 = codigo2.padEnd(10, "*")
console.log(codigo2)