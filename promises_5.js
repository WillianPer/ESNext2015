const funcionarOuNao = (valor, chanceDeErro) => {
    return new Promise((resolve, reject) => {
        try {

            cons.log('temp')
            if (Math.random() < chanceDeErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao( 'Testando...', 0.8)
    .then(valor => `Valor: ${valor}`)
    .then(
        valor => consol.log(`Valor: ${valor}`),
        err => console.log(`Erro: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('fim'))