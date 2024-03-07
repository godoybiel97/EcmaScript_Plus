//Esse método pertence a objetos do tipo promise e retorna todas as promessas após a conclusão
const promise1 = new Promise((resolve, reject) => {
    return setTimeout(() => {
        resolve("Promise 1 resolvida")
    }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
    return setTimeout(() => {
        reject("Promise 2 resolvida")
    }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
    return setTimeout(() => {
        resolve("Promise 3 resolvida")
    }, 2000)
})

//Todas as promessas inseridas num array
const promises = [promise1, promise2, promise3]
Promise.allSettled(promises).then((resultados) => {
    resultados.forEach((resultado) => resultado.status == "fulfilled" ? console.log(resultado.value) : console.log(resultado.reason))
})