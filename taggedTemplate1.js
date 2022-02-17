// Tagged Template - processa o template dentro de uma função
function tag(parte, ...valores){
    console.log(parte)
    console.log(valores)
    return 'outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)
console.log(`${aluno} está ${situacao}.`)