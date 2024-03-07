//Referência
let objeto1 = {
    nome: "Gabriel",
    profissao: "Programador"
}

let objeto2 = {
    nome: "Tutiara",
    profissao: "Contadora"
}

const objetos = [objeto1, objeto2]
console.log("Original: ")
objetos.map((value, index) => console.log(index, value))

//Vazamento de memória
objeto2 = null
console.log(objeto2)

//Mesmo o objeto sendo null é possível acessar e alterá-lo por conta do vazamento de memória ou objeto fantasma
objetos[1].nome = "Amor da minha vida"

console.log("Alterado: ")
objetos.map((value, index) => console.log(index, value))

//Instanciando o WeakMap
let objeto3 = {
    nome: "Gabrieli",
    profissao: "Programador"
}

let objeto4 = {
    nome: "Geovana",
    profissao: "Contadora"
}

const objetosWM = new WeakMap()
objetosWM.set(objeto3, "Objeto 3")
objetosWM.set(objeto4, "Objeto 4")
console.log(objetosWM)

objeto3 = null
console.log(objetosWM)

