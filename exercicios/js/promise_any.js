//Promises resolvidas ou rejeitadas
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 resolvida")
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 resolvida")
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 resolvida")
    }, 3000)
})

//Coleção de promises
const promises = [p1, p2, p3]

//Será capturada a promise que for encerrada primeiro
//Caso a promise com menor tempo seja rejeitada, a próxima com menor tempo será retornada
//Se todas forem rejeitadas retornará o erro
Promise.any(promises).then((resolvida) => {
    console.log(resolvida)
}).catch((erro) => {
    console.log(erro)
})