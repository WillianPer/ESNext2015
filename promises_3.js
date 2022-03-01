const gerarNumeroEntre = ( min, max) => {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise( resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumeroEntre(10, 15)
    .then(console.log)

const numeroMultiplicadoPor10 = num => num * 10
const fazLeitura = numeroX10 => `O numero gerado foi ${numeroX10}`

gerarNumeroEntre(14, 21)
    .then(numeroMultiplicadoPor10)
    .then(fazLeitura)
    .then(console.log)