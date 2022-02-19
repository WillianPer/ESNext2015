// Não aceita repetição/ Não indexada
const times = new Set()
times.add('vasco')
times.add('corinthians')
times.add('flamengo').add('palmeiras').add('santos')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('vasco')
console.log(times.has('vasco'))