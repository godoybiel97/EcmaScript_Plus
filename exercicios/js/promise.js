// //Instanciar o objeto e passar os parâmetros necessários
// let promise = new Promise((resolve, reject) => {
//     //tentativa de solução, caso não haja sucesso o erro será capturado
//     try {
//         //Forçar um novo erro para teste
//         throw new Error("Erro inesperado !")

//         setTimeout(() => {
//             resolve("Sucesso !")
//         }, 3000)
//     }

//     catch(error) {
//         setTimeout(() => {
//             reject(error)
//         }, 3000)
//     }
// })

// //Status pendente
// console.log(promise)

// //Conclusão retornando o erro ou sucesso
// setTimeout(() => {
//     console.log(promise)
// }, 5000)


let promise2 = new Promise((resolve, reject) => {
    //Simular a requisição HTTPS
    setTimeout(() => {
        let resposta_requisicao = {}

        //Simular um possível erro ou não
        if(false) {
            resposta_requisicao = {
                codigo: 1050,
                erro: "Falha na operação"
            }

            reject(resposta_requisicao)
        }

        resposta_requisicao = {
            0: { id: 1, nome: "Gabriel"},
            1: { id: 2, nome: "Tutiara"},
            2: { id: 3, nome: "Junior"},
        }

        resolve(resposta_requisicao)
    }, 3000)
})
//Captura os dados passados pelo resolve()
.then(dados => {
    console.log(dados)

    return "Parâmetro"
})
//Quando um then() retorna um valor, é possível passa-lo como parâmetro para o then() seguinte
.then(param => {
    console.log(param)
})
//Captura o erro passado pelo reject()
.catch((error) => {
    console.log(error)
})