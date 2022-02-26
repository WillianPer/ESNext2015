let a = 1 
console.log(a)

const promise = new Promise(function(resolve){
    resolve([3, 'a', 4, '&%S$#@*+='])
})

// console.log(typeof Promise)
function pegarQuartoElemento(array){
    return array[3]
}
function TerceiroElemento(string){
    return string[2]
}
function transformarParaMinuscula(letraMenor){
    return letraMenor.toLowerCase()
}



promise
    .then(pegarQuartoElemento)
    .then(TerceiroElemento)
    .then(transformarParaMinuscula)
    .then(console.log)