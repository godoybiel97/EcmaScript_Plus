//Verifica se o valor é null ou undefined durante o processo de atribuição
let a = "Letra A"
let b = null

//Letra A não sofrerá alteração porque tem valor definido, ao contrário da letra B que é null
a ??= "Outra letra"
b ??= "Letra B"
console.log(`Letra A: ${a} | Letra B: ${b}`)

//A mesma ideia é aplicada para objetos e seus atributos
let carro = {
    marca: "Chevrolet"
}
carro.marca ??= "Volkswagen"
carro.modelo ??= "Jetta"
carro.ano ??= 2021
console.log(`Informações do carro: ${carro}`)

//A mesma ideia é aplicada para arrays
let arr = ["Abacaxi", undefined, "Banana", null, 5, []]
arr.forEach((item, indice) => {
    arr[indice] ??= "<Não informado>"
})
console.log(arr)
