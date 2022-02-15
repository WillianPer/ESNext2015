// Arrow function

const somaDe2 = (a, b) => a + b
console.log(somaDe2(2, 3))

// arrow function
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

// Parametro default
function log(texto = 'Node'){
    console.log(texto)
}
 log()
 log(undefined)
 log(null)
 log('Eu sou mais forte!')

 // Operador rest
 function total(...numeros){
     let total = 0
     numeros.forEach(n => total += n)
     return total
 }
 console.log(total(1, 2, 3, 4, 5))