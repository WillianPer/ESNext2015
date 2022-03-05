function esperandoPor( tempo = 4000){
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    } )
}

// esperandoPor(4000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperandoPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperandoPor)
//     .then(() => console.log('Executando promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

const retornarValorRapido = async () => {
    return 20
}

const executar = async () => {

    const valor = await retornarValor()

    const valor2 = await retornarValorRapido()

    await esperandoPor(3000)
        .then(() => console.log(`Async/Await ${valor}...`))
    await esperandoPor(1000)
        .then(() => console.log(`Async/Await ${valor + 1}...`))
    await esperandoPor(3000)
        .then(() => console.log(`Async/Await ${valor + 2}...`))
    await esperandoPor(3000)
        .then(() => console.log(`Async/Await ${valor2}...`))
    await esperandoPor(1000)
        .then(() => console.log(`Async/Await ${valor2 + 1}...`))
    await esperandoPor(3000)
        .then(() => console.log(`Async/Await ${valor2 + 2}...`))
    
    return `Valor1 : ${valor + 3}, valor2 : ${valor2 + 3}`
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()