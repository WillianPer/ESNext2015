// ES8: Object.values/Object.entries
const object = {a: 1, b: 2, c: 3}

console.log(Object.values(object))
console.log(Object.entries(object))

// Melhorias na notacao literal

const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal{}

class Cachorro extends Animal{
    falar(){
        return 'AU! AU!'
    }
}

console.log(new Cachorro().falar())