//Esse método é utilizado para objetos, em sua maioria, e retorna um objeto e o seu tipo
//[object Object]
class Carro {
    constructor(marca, modelo) {
        this.marca = marca,
        this.modelo = modelo
    }

    //Método sendo sobrescrito
    toString() {
        return `Um carro da marca ${this.marca} e modelo ${this.modelo}`
    }
}

let carro = new Carro("Jeep", "Renegade")
console.log(carro)
console.log(carro.toString())