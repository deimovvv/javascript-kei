// objetos


// categorias de libros 

/* let biologia = 'lyn margulis'
let fisica = 'Einstein'
let botanica = 'paraselso'
let diseño = 'Keila Herrera'
let arteInmersivo = 'el churi'


// OBJETO LITERAL  // clave(propiedad): valor

const literal = {
    //  key-value
    biologia: 'DATA',
    fisica: 'data', 
    diseño: 'Data'

} 

// funcion constructura para crear nuevo objeto

function LibrosAutores1(literal)  {
    this.biologia = literal.biologia
    this.fisica = literal.fisica
    this.diseño = literal.diseño
}

// creacion de nuevos objetos cambiando los valores a las propiedas a partir de la funcion constructora

const libreo = new LibrosAutores1({ biologia:'varela', fisica: 'Santolaya', diseño: 'bullbeny'})

const libro2 = new LibrosAutores1('curtis', 'fritjof capra', 'antonela maffeo')
const libro3 = new LibrosAutores1('humberto maturama', 'newton', 'xrebaglati')



// objetos TIENEN METODOS, y a la vez los METODOS sun FUNCIONES. pero se ejectuan autoreferenciando al objeto
// ej en FUNCION - invocamos de manera global:
const suma = (precio, cantidad) => (precio * cantidad) /  2
suma() // invoco globalmente

// en cambio al metodo de objeto, lo invoco en el mismo objeto
// ej :
literal.metodo() */



/* 

 let fruta = 'uva' // string es un objeto que tiene metodo

 alert(fruta.length) // usamos como salida alert que imprime el metodo del string LENGHT (longitud del caracteres de objeto, osea 3)
// recordar que objeto tiene metodos(funciones)
 alert('PASO A MAYUSCULA uva CON tuUpperCase :   ' + fruta.toUpperCase()) */



// Metodos PERSONALIZADOS
  function Persona(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
        this.hablar = function(){ alert("HOLA SOY "+ this.nombre)}
    }
    const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
    const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742"); 
/* persona1.hablar();
persona2.hablar(); */




// OPERADOR de los objetos IN Y FOR..IN

// IN devuele true si la propiedad existe en el objeto
// alert('nombre' in persona1) // en este caso devuelve true porque nombre esta en persona1
// alert('peso' in persona1)  // devuelve false porque la propiedad peso no esta en objeto persona1


// for(in) devuelve todas las propiedades del objeto

    const marcaPais = {
        argentina: 'bullbeny',
        francia: 'marine sere',
        alemania: 'balenciga',
        italia: 'gucci'
    }

    // for().... in
    for(const variable in marcaPais){  
        alert(marcaPais[variable])
    }

    




// CLASES
// syntaxis para hacer mas clara la creacion de objetos personalizados
// referencia a la funcion constructora

class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");



