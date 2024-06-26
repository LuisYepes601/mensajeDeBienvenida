//console.log("Hola mundo")

/**
 * Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza 
 * console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
 */
var nombre = "Luis";
console.log(`Hola, tu nombre es: ${nombre}`);

/**
 * Crea una variable llamada "nombre" y asígnale tu nombre. Luego,
 *  utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
 */
var nombre = "Luis";
alert("Hola " + nombre)

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

edad =parseInt(prompt("Ingrese su edad"));
if (edad > 17) {
    console.log("Usted es mayor de edad");
} else {
    console.log("Usted es menor de edad");
}