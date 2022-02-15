// operador ... rest(juntar)/spread(espalhar)
// Usar rest como parametro de uma function

// Usar spread com objeto
const funcionarios = {nome: 'Ana', salario: 12345.67}
const clone = {ativo: true, ...funcionarios}
console.log(clone)

// Uso de spread com Array
const grupoA = ['antonio', 'maria', 'rafaela']
const grupoFinal = ['carla', ...grupoA, 'eduarda']
console.log(grupoFinal)