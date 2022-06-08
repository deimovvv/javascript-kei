// objetos


// categorias de libros 

let biologia = 'lyn margulis'
let fisica = 'Einstein'
let botanica = 'paraselso'
let diseño = 'Keila Herrera'
let arteInmersivo = 'el churi'


// OBJETO
/* 
const librosAutores = {
    //  key-value
    biologia: 'lyn margulis',
    fisica: 'Einstein', 
    diseño: 'keila herrera'

}  */

function LibrosAutores1(biologia, fisica, diseño)  {
    this.biologia = 'lyin margulis';
    this.fisica = 'EINSTEIn';
    this.diseño = 'keila herrera'
}


const libro2 = new LibrosAutores1('curtis', 'fritjof capra', 'antonela maffeo')
const libro3 = new LibrosAutores1('humberto maturama', 'newton', 'xrebaglati')























