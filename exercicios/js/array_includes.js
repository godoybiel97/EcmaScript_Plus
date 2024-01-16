let array = ["Abacaxi", "Banana", "Cereja"]

//Utilizando o método find, é preciso utilizar uma função de callback
//Essa função percorre os índices do array e retorna o valor procurado ou undefined
let retorno1 = array.find(item => item == "Abacaxi")
console.log(`O valor é encontrado: ${retorno1}`)

let retorno2 = array.find(item => item == "Abacate")
console.log(`O valor não é encontrado: ${retorno2}`)

//Utilizando o método includes, o retorno sempre será true ou false de acordo com o valor procurado
let retorno3 = array.includes("Abacaxi")
console.log(`O valor é verdadeiro: ${retorno3}`)

let retorno4 = array.includes("Abacaxi")
console.log(`O valor é falso: ${retorno4}`)