var cad=require("./cadena");

const palabra="Anita lava la tina";

var pali=cad.palindromo(palabra);
var p=cad.palabras(palabra);
var l=cad.letras(palabra);
var v=cad.vocales(palabra);
var c=cad.consonantes(palabra);

console.log('Palindromo: ', pali);
console.log('Palabras: ', p);
console.log('Letras: ', l);
console.log('Vocales: ', v);
console.log('Consonantes: ', c);