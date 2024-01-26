//Utilização de assíncronismo (async/ await) em laços de repetição
let processos = [1, 2, 3, 4, 5]

let iteracaoAssincrona = async () => {
    //Realiza um processo do array processo, ou seja, itera para item do array
    for(let processo of processos) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Em processamento")
                resolve()
            }, 2000)
        })

        console.log(processo)
    }
}

iteracaoAssincrona()