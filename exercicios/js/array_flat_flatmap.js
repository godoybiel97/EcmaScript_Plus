//Método utilizado para array dimensionais que precisam serem trasnformados em um único nível
//flat(nível de dimensão)
let array = [1, 2, 3, 4, [5, 6, 7, 8], 9, 10, [11, 12, [13, 14, [15, 16]]]]
console.log(array)

let array2 = array.flat(3)
console.log(array2)

//Usando o map para comparar com o flatMap
let nomes = ["Gabriel, Tutiara", "Gabrieli, João", "Geovana, Anonimo", "Gessyca, Marco, JP"]
console.log(nomes)

let nomesMap = nomes.map(item => {
    return item.split(",")
})
console.log(nomesMap)

//Flatmap percorre os itens de um array dimensional e retorna um novo array com todos eles em um nível
let nomesFlatMap = nomes.flatMap(item => {
    return item.split(",")
})
console.log(nomesFlatMap)
