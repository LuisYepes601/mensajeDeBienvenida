//console.log("Hola mundo")

/**
 * Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza 
 * console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
 */
var nombre = "Luis";
//console.log(`Hola, tu nombre es: ${nombre}`);

/**
 * Crea una variable llamada "nombre" y asígnale tu nombre. Luego,
 *  utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
 */
var nombre = "Luis";
//alert("Hola " + nombre)

/**
 Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, 
 almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
 */

/** respuesta = prompt("Cual es tu lenguaje de programación favorito?")
console.log(`Tu lenguaje de progración es ${respuesta}`)
*/
/**
 Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos 
 de tu elección. 
 Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
  Utiliza console.log para 
 mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
 */
/**let valor1,valor2;

valor1= 1;
valor2= 2;

let resultado = valor1+valor2;
console.log(`La suma de valor 1 ${valor1}, + valor 2 ${valor2} es: ${resultado} `)

/**
 * Crea una variable llamada "valor1" y otra llamada "valor2", 
 * asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el 
 * resultado en una tercera variable llamada "resultado". Utiliza console.log 
 * para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
 */let valor1, valor2;

(valor1) = 9.8;
(valor2) = 2;

let resultado = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + " es = " + Math.round(resultado));


/**
 Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada,
  utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
 */
/**edad =parseInt(prompt("Ingrese su edad"));
if (edad > 17) {
    console.log("Usted es mayor de edad");
} else {
    console.log("Usted es menor de edad");
} */


/**
 * Crea una variable "numero" y solicita un valor con prompt.
 *  Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
 */

/**
 * let numero;
numero = parseInt (prompt("Ingresa un número"));

if (numero== 0){
alert("El numero es igual a 0")
}else if(numero > 0){
    alert("El número es positivo")
}else{
    alert("El número es negativo")
}
 */
/**
 * Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
 */
/**
 * let contador  = 1;
while (contador <= 10 ) {
  console.log("Numero " + contador)
    contador ++;
}
 */

/**
 * Crea una variable "nota" y asígnale un valor numérico. 
 * Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o 
 * "Reprobado" en la consola.
 */

/**
 * let nota = parseInt(prompt("Ingresa tu nota"));
//(nota >= 7) ? console.log("Aprobado") : console.log("Reprobado");
if (nota >= 7) {
    console.log("Aprobado")
} else {
    console.log("Reprobado")
}
 */

/**
 * Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
 */

//let numAleatorio =(Math.random() * 10+1)
//console.log(numAleatorio);

/**
 * Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
 */

//let numAleatorio = parseInt((Math.random()*10)+1);
//console.log(numAleatorio);

/**
 * Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
 */

let numAleatorio = parseInt((Math.random() * 1000) + 1)
console.log(numAleatorio);