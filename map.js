const tecnologias = new Map()
tecnologias.set('react', {frameWork: false})
tecnologias.set('angular', {frameWork: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular').frameWork)

const chavesVariadas = new Map([
    [function(){ }, 'funcao'],
    [{}, 'objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((vl, ch)=>{
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas.get(123))
chavesVariadas.set(345, 'b')
console.log(chavesVariadas)
