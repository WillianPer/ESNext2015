const gerarNumeroEntre = ( min, max, numerosProibidos) => {
    if (min > max) [max, min] = [min, max]

    return new Promise( (resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)){
            reject('Numero Repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

const gerarMegaSena = async (quantidadeDeNumeros, tentativas) => {
    try{
        const numeros = []
        for(let _ of Array(quantidadeDeNumeros).fill()){
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        } 
        return numeros
    }catch(e){
        if (tentativas > 10){
            throw 'Nao deu certo!!!!'
        } else {
            return gerarMegaSena(quantidadeDeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)

// gerarNumeroEntre(1, 5, [1,2,4])
//     .then(console.log)
//     .catch(console.log)