//Declarar um objeto
let objeto = {
    dados: {
        nome: "Gabriel",
        sobreNome: "Godoy",
        idade: 26,
        profissao: "Desenvolvedor front-end"
    },
    hobbies: [
        {id: 1, hobby: "Assistir futebol"},
        {id: 2, hobby: "Comer"}
    ]
}

console.log(objeto)

//A transformação do objeto para array acontece através do uso da classe Object
let objectValues = Object.values(objeto)
console.log(objectValues)

let objectEntries = Object.entries(objeto)
console.log(objectEntries)

let objectDescriptors = Object.getOwnPropertyDescriptor(objeto)
console.log(objectDescriptors)

//Writable: quando definido como false, ele indica que o valor da propriedade não poderá ser modificada
Object.defineProperty(objeto, 'nome', {
    value: "Gabriel Godoy",
    writable: false
})
console.log(objectDescriptors)

//Enumerable: quando definido como false, a propriedade em questão não é exibida em laços de repetição
for(let propriedade in objeto) {
   console.log(propriedade, objeto[propriedade])
}

Object.defineProperty(objeto, 'hobbies', {
    enumerable: false
})
console.log(objectDescriptors)

Object.defineProperty(objeto, 'idade', {
    enumerable: false
})
console.log(objectDescriptors)

//Configurable: quando definido como false, indica que a propriedade não pode ser deletada e também não podemos mais modificar os descritores, exceto a mudança de writable para false
Object.defineProperty(objeto, 'profissao', {
    configurable: false
})
console.log(objectDescriptors)
