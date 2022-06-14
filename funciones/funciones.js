
/* let numero = 2
let numero1 = 5

let resultado = numero + numero1 // global

function suma(p1, p2){
      let resultado = p1 + p2 // local alcanza
      alert('devuelvo resultado de variable local: ' + resultado)
}
suma(2,4)


function nombre(){
      // data
      // las instrucciones que estan pasando adentro
}
nombre() */


// minimal


// funcion ANONIMA

//Generalmente, las funciones anónimas se asignan a variables declaradas como constantes

/* let pepito = 40

const suma  = function (a, b) { return a + b }
alert(suma(15,pepito))

const saludar = function () {return alert('saludar')}
alert(saludar())
alert(saludar())
alert(saludar())


// FUNCION FLECHA

const suma1  = (a, b) => a + b
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
alert(suma1(15,20)) */





















/* 
// normal
   function nombre(){

   }
   nombre()

// funcion anonima

const anonima = function () {

}
anonima()
 */
// funcion flecha EM6

/* 
const suma  = (a,b) => { return a + b }
const resta = (a,b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva  = (x) => { return x * 0.21 }  
let precioProducto  = 500; 
let descuento = 50;  
//Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento ); 
alert(nuevoPrecio); */































// nuevo precio:   valor - 50
 



/* 





// normales



function nombre(p1, p2){
 return  p1 -  p2
 
}


nombre(15, 37)




// anonima

//Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
const suma  =  (a, b) => { return a + b }
const resta =  (a,b)  => a + b


alert(suma(20, resta(10,10)))

// suma :  20 + 10 = 30


// 15 -  B

// B: FUNCION - SUMA 17 + 20 : 37

// B: 37

// RESTA(17 - 37) 


console.log();

// flechas */



// normall


/* 
const suma = function (resta, p4) {
      return p3 + p4
     }


let resultado = 0
function nombre(p1, p2) {
 resultado = p1 + p2

}
let variable = 20

nombre(10, variable)

alert(resultado)
 */





/* const suma  = (a,b) => { return  a + b; }
const resta = (a,b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva = x => { return x * 0.21;}
let precioProducto  = 500; 
let descuento = 50;  
//Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento ); 
alert(nuevoPrecio); */
 



 let precio = prompt('ingrese precio de producto')
alert('DESCUENTO DE 20% EN CASO DE COMPRAR 5 PRODUCTOS O MAS')
let cantidadTotal = prompt('ingrese cantidad de producto')

let sumaProducto = (p, p1) => {
      if(p1 > 5){
         let precioDescuento = p * p1 
         alert('se aplica decuento de 20%')
         return p * p1  
            
      } else {  
            alert('Precio sin descuento')
            return p * p1 }
            
}

let precioTotal = sumaProducto(precio, cantidadTotal)
alert(precioTotal) 
 


//                 10               5
// sumaProducto(productoTotal, cantidadTotal)



let ingreseProducto = prompt('ingresar producto')
alert('Precio pollera $1200')
let precio = 1200

let cuotas = prompt('ingresar en cuantas cuotas')

const calculo = (precio, cuotas) => {
      return precio / cuotas
}



let cadaCuota = calculo(precio, cuotas)
alert('Cada cuota te va a quedar en : $ ' + cadaCuota)
 


/* alert('Hola Alumno, voy a calcular tu nota final')
alert('Pero primero, necesito saber tus notas durante el año')
let primero = parseInt(prompt('Ingresar la nota de 1er cuatrimestre'))
let segundo = parseInt(prompt('Ingresar la nota de 2do cuatrimestre '))

const notaFinal = (a, b) =>  (a + b) / 2
let final = notaFinal(primero, segundo)


if(final < 7){
    alert('Alumno recursa con  ' + final)
} else
alert('Alumno aprueba  ' + final)
 */








