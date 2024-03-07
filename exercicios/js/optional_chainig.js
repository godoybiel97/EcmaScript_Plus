let objeto = {
    2021: {
        janeiro: {
            despesas: 2000,
            investimento: 1000
        },
        fevereiro: {
            despesas: 1500,
            investimento: 1500
        }
    }
}

//Como todos os atributos são verdadeiros a saída será igual a 2000
console.log(objeto["2021"].janeiro.despesas)

//Como o atributo marco não existe a saída será um erro JS
console.log(objeto["2021"].marco.despesas)

//Se o operador ? for utilizado para verificar a condição de existencia, então a saída será undefined
console.log(objeto["2021"].marco?.despesas)