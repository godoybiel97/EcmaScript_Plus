//Função generator acompanham o *
function* generator() {
    yield console.log("Teste 1") //O uso do yeld permite executar o método next() que retorna o seu valor e o que está antes dele
    yield "Teste 2"

    return "Teste 3"
}

//Objeto iterador
let meuGenerator = generator()
console.log("Objeto iterador " + meuGenerator)
console.log("-----------------")

meuGenerator.next()
console.log("-----------------")
console.log(meuGenerator.next())
console.log("-----------------")
console.log(meuGenerator.next())


