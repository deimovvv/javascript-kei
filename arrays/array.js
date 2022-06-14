// arrays


// objeto
/* const verdurasColores = {
    manzana: 'rojo',
    banana: 'amarilla',
    pera: 'verde pera',
    frutilla: 'morada',
    granada: 'violeta'}

// recorremos el objeto para mostrar sus propiedades con for in
for(const propiedad in verdurasColores){
   alert(verdurasColores[propiedad])
} */

//                     ARRAY  
/// arrays te permiten almacenar strings, boleanos, numbers, OBJETOS
// indices o posiciones de arrays arranca en 0


// Declaraciòn de array vacío
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaracion de array con booleanos
const arrayD = [true,false,true,false];
// Declaracion de array mixto
const arrayE = [1,false,"C4"];


// indice o posicion:   0         1        2          3
     const ropa = ['remera', 'pantalon', 'camisa', 'pollera']
// elementos:        1            2        3          4            

//      desde    hasta    actualizacion
for (let i = 0;  i < 4 ;    i++) {
    // alert(ropa[i])
}


// METODOS Y PROPIEDADES DE ARRAY

  //     indice           0          1         2       3        4      5     
const computadoras = ['lenovo', 'samsung', 'aurous', 'mac', 'acer', 'data']
//    elemento          1           2         3         4       5     6       

// alert(computadoras.length)   // propiedad lenght accede a los 5 elemtnos del array

// con length en este caso sabemos la longitud de array

for(let i = 0; i < computadoras.length ; i++){
    //alert(computadoras[i])
}

// METODO PUSH - agrega elemento a a array  al final
// METODO UNSHIFT - agrega elemento al principio

const maquinas = ['tren', 'avion', 'heladera', 'camion']

/* alert('maquinas sin el auto:  ' + maquinas)
alert('con push agrego elemento:  auto') */
/* alert('ARRAY INICIAL')
alert(maquinas)
maquinas.push('auto')
alert('Agregamos al final Con push el elemento AUTO: ')
alert(maquinas)

maquinas.unshift('bicicleta cuantica')
alert('Ahora agregamos bicicleta cuantica con UNSHIFT ADELANTE')
alert(maquinas)

alert('ahora eliminamos con shift() el primer elemento')
maquinas.shift()
alert(maquinas)


alert('elimino el ultimo con pop')
maquinas.pop()
alert(maquinas)
 */
// metodo splice elimina elementos del array con dos parametros
// primer parametro es Desde que indice elimina, y el segundo cuantos elementos a partir del indice que le marcaste
/* alert(maquinas)
quinas.splice(2, 2)
alert(maquinas)
 */

// metodo join, permite generar un string con todos los elementos del array
/* alert(maquinas)
alert(maquinas.join('-'))
 */


// metodo concat - podemos combinar dos arrays en uno
/* 
const plantas = ['alocacia', 'suculenta', 'potus']
const animales = ['langosta', 'hipopotamo', 'caballito de mar']

alert('array de plantas: ' + plantas)
alert('array de animales: ' + animales)
alert('concatenamos en una nueva variable plantas y animales : ')
const reinosNaturaleza = plantas.concat(animales)
alert('array REINOS DE LA NATURALEZA: ' + reinosNaturaleza) */



// metodo slice devuelve copia del array, de inicio a fin, (fin no incluido)
// indice o pos     0        1        2          3        4
const animales = ['vaca', 'toro', 'ballena', 'delfin', 'tiburon']
// elementos         1       2       3          4         5
// desde posicion 0, 3
const animalesMarinos = animales.slice(0,4)

// alert(animalesMarinos)


// metodo indexOf

const organulosCelula = ['centro de produccion', 'mitocondrias', 'cloroplasto', 'aparato golgi']

// le pasamos que el elemento que queremos que nos devuelva el indice
// alert(organulosCelula.indexOf('aparato golgi')) // indice es 3
// alert(organulosCelula.indexOf('mitocondrias'))  // indice 1


// metodo includes
// permite saber si un elemento que recibo por parametro existe o no, devolviendo un boleano true o false

// alert(organulosCelula.includes('fluidocelular')) // false porque fluido celular is not part of elements of organulosCelula
//alert(organulosCelula.includes('cloroplasto'))  // true porque elemento esta adentro de array


// metodo reverse
// inverte el orden de array

/* alert('array inicial')
alert(organulosCelula)
organulosCelula.reverse()
alert('revierto orden de array')
alert(organulosCelula) */

// REVERSE AL IGUAL QUE LOS QUE AGREGAN O ELIMINAN SON DESTRUCTIVOS




// alert(organulosCelula.length)



// EJEMPLO PRACTICO DE CODER

//Declaraciòn de array vacío y variable para determinar cantidad
/* const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada);
   alert(listaNombres.length);
}while(listaNombres.length   !=   cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevosNombre = ['ANA', 'EMA']
const nuevaLista = listaNombres.concat(nuevosNombre);
//Salida con salto de línea usando join
alert(nuevaLista.join("-")); */
 

/* 
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']


// recibo el elemento a borrar por parámetro
const eliminar = (parametro) => {
    // busco su índice en el array
    let index = nombres.indexOf(parametro)
    alert(index)
     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 2)
        alert(nombres)
    } 
}

eliminar('Pedro')
 */


const librosAutor = {
    biologia: 'lyn margulis',
    fisica: 'newton',
    botanica: 'paracelso'
}


const libroAutorArray = [librosAutor,{biologia: 'maturama', fisica: 'capra'}]



// objeto literal
const objeto1 = { 
    id: 1, 
    producto: "Arroz"
 };

const array   = [objeto1, { id: 2, producto: "Fideo" }, {id: 3, producto: "Pan"  }];
/* array.push({ id: 3, producto: "Pan" }); */


/* const nuevoObjeto = {
    id: 4,
    nombre: 'pepe'
}
const nuevoArray = [nuevoObjeto, {id: 5, nombre: 'pepa'}]
nuevoArray.unshift({id:3, nombre: 'virgen', apellido: 'herrera'}) */


// usamos for of para recorrer un array que tiene objetos......


const producto1 = {
    id: 1,
    producto: 'remera fina'
}

/* const productos = [producto1,
                  { id: 2,  producto: "Pollera" },
                  { id: 3,  producto: "Panalon pollera" }];



  //  Es un iterador que recorre el array de principio a fin, y en cada iteración accedemos al elemento en cuestión a través de la referencia que declaramos. Por cada iteración se ejecuta el bloque de código que definimos entre llaves.
          
for (const referencia of productos) {
    alert( 'Valor de refencia me entrega valor de producto' + referencia.producto);
    alert(' y aca el valor del id' + referencia.id)
    

}
 */



/* 
let total = 0

for (let i = 1; i <= 10; i++) {
    total += i
}

console.log(total)  //  55


// 


*/
































