//Esse método transforma arrays em objetos
//É esperado o uso para arrays que possuam chave e valor
let dados = [
    ["nome", "Gabriel Godoy"],
    ["profissional", [
        ["linkedin", "gabriel_godoy97"],
        ["profissão", "programador"]
    ]],
    ["país", "Brasil"]
]

console.log(dados)

let dadosTransformados = Object.fromEntries(dados)
console.log(dadosTransformados)