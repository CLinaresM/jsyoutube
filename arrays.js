//declaracion de un array
let numeros = [];

numeros =[15,80,650,50.30,-10,24];

document.write('Elementos: ',numeros);
document.write('<br>');
document.write('Primer elemento: ',numeros[0]);
document.write('<br>');
numeros [0] =13;
document.write('Elementos: ',numeros);
document.write('<br>-----');

let frutas = ['peras', 'manzanas','naranjas','mangos'];
document.write('<br>');
document.write('Frutas: ',frutas);
document.write('<br>');
//Metodos de los arrays

//ver cantidad de elementos
document.write('cantidad: ',frutas.length);
document.write('<br>');
document.write('cantidad: ',numeros[numeros.length-1]);
document.write('<br>------------------');
document.write('<br>');

//arrays tipo texto
document.write('En string: ',numeros.toString());
document.write('<br>');

//unir tipos de array

let letras = ['a', 'b','c'];
let numeros2 =['1','2','3'];
document.write('Alfanumerico: ',letras.concat(numeros2));
document.write('<br>-----------------');
document.write('<br>');

//Borrar ultimo elemento

numeros.pop()
document.write(numeros);
document.write('<br>');

//agregar elemento al final

numeros.push(50)
document.write(numeros);
document.write('<br>');

//eliminar primer elemento

frutas.shift();
document.write(frutas);
document.write('<br>');

//insertar elmento al principio

numeros.unshift(1000);
document.write(numeros);
document.write('<br>');

//eliminar elmentos a partir de una posicion

numeros.splice(2,4);
document.write(numeros);
document.write('<br>----------------');
document.write('<br>');

//como copiar un array

let cantidades = [100,200,300,400,500,600];
let copia = cantidades.slice(1,4);
document.write('Array copia: ', copia );