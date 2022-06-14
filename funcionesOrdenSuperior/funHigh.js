// funciones de orden superior


/* 
 En el primer caso, podremos tener una función que retorna una función,
 lo cual nos permitiría crear funciones con un esquema superior */

/* function mayorQue(n) {
    return (m) => m > n  // devuelve una funcion
}

let mayorQueDiez = mayorQue(10)
// let mayorQueDiez = (m) => m > n   ACORDARSE DE ESTO!

alert( mayorQueDiez(12) )  //  true
alert( mayorQueDiez(8) )  //  false
 */


// recibe funcion por parametro

function porCadaUno(arr, fn) {
    for (const hola of arr) {
        fn(hola)
    }
}

/* Supongamos que quiero recorrer un array y 
hacer algo con cada uno de sus elementos. */


const numeros= [1, 2, 3, 4]

/* porCadaUno(numeros, console.log) */

let total = 0

function acumular(num) {
    total += num
}

porCadaUno(numeros, acumular)
alert(total) // 10


/* Es usual definir la función directamente sobre el parámetro como una función anónima, aprovechando la sintaxis de arrow function. 
Esto permite definir acciones más dinámicas. */

const duplicado = []

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})

alert(duplicado) // [2, 4, 6, 8]










