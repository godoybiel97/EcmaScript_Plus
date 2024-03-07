export const saudacao = () => {
    let data = new Date()
    data.toLocaleDateString()

    return `Olá ! Seja bem-vindo. Hoje é ${data}.`
}

export function cep(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
}