//Instanciar a promise
let assincrono = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Processo assíncrono realizado com sucesso")
    }, 5000)
})

//Função para pausar a execução das respostas
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//Retornar a resposta da promise e ordenar cada uma conforme o fim de cada execução
async function recuperarDados() {
    await assincrono.then(dados => {
        console.log(dados)
    })
    console.log("Processo 1")

    await esperar(5000)
    await fetch("https://jsonplaceholder.typicode.com/comments").then(response => response.json()).then(dados => console.log("Comentários: ", dados))
    console.log("Processo 2")

    await esperar(5000)
    await fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(dados => console.log("Publicações: ", dados))
    console.log("Processo 3")
}

recuperarDados().then(() => console.log("Fim"))