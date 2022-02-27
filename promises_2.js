
// setTimeout(function(){
//     console.log('Executando callback...')

//     setTimeout(function(){
//         console.log('Executando callback...')

//         setTimeout(function(){
//             console.log('Executando callback...')
//         }, 2000)
//     }, 2000)
// }, 2000)


function esperandoPor( tempo = 2000){
    return new Promise(resolve => 
        setTimeout(()=> {
            console.log('Executando promise...')
            resolve('Vishii...')
        }
        , tempo)
    )
}


esperandoPor()
    .then(() => esperandoPor())
    .then(() => esperandoPor())