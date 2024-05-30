//redondear a siguiente entero en decimal .5
var precio = Math.round(399.50);
document.write('Precio redondeado: ',precio);
document.write('</br>');

//redondear sin importar decimal hacia arriba
var precio = Math.ceil(299.3);
document.write('Precio redondeado: ',precio);
document.write('</br>');

//redondear sin importar decimal hacia abajo
var precio = Math.floor(199.2);
document.write('Precio redondeado: ',precio);
document.write('</br>');

//calcula el seno de un angulo
var seno = Math.sin(45);
document.write('Seno de 45: ', seno);
document.write('</br>');

// calcular el exponencial
var expo = Math.exp(2);
document.write('El exponente de 2 es: ',expo);
document.write('</br>');

//calcular el logaritmo 
var logaritmo = Math.log(10);
document.write('Logaritmo de 10: ',logaritmo);
document.write('</br>');

//calcular valor absoluto
var absoluto = Math.abs(-10);
document.write('V abs de -10: ',absoluto);
document.write('</br>');

//calcular valor maximo de secuencia
var maximo = Math.max(2, 10, 500, 300, 250,3,8);
document.write('Mayor valor: ',maximo);
document.write('</br>');

//calcular valor minimo de secuencia
var minimo = Math.min(2, 10, 500, 300, 250,3,8);
document.write('Minimo valor: ',minimo);
document.write('</br>');

//traer a pantalla valor aleatorio

var aleatorio = Math.round(Math.random()*100);
document.write('valor aleatorio: ',aleatorio)
document.write('</br>');

// raiz cuadrada de un numero
var valor = Math.sqrt(81);
document.write('raiz cuadrade de 81: ',valor)
document.write('</br>');

//calcular el exponente de un numero

var  exponente = Math.pow(5, 2);
document.write('valor de 5 a la 2: ', exponente );
document.write('</br>');
