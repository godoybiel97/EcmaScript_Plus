//Verifica se os atributos existem ou não dentro das classes
class Pessoa {
    id = null
}

class PessoaFisica extends Pessoa {
    nome = "Gabriel"
}

class PessoaJuridica extends Pessoa {
    razaoSocial = "SPFC"
}

//Retornará true para os dois atributos
let pessoaFisica = new PessoaFisica()
console.log(Object.hasOwn(pessoaFisica, "id"))
console.log(Object.hasOwn(pessoaFisica, "nome"))

//Retornará true para id e false para nome
let pessoaJuridica = new PessoaJuridica()
console.log(Object.hasOwn(pessoaJuridica, "id"))
console.log(Object.hasOwn(pessoaJuridica, "nome"))

