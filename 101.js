// Variables
// --------
var nombre;
let edad;
const pi;
let contador = 0;

// Una variable es...
// Son espacios de memoria que almacenan datos

// Tipos de datos
// --------------
let edad = 22;                     // número entero
let precio = 2.50;                 // número decimal
let nombre = 'Kike';               // cadena
let esCaro = true;                 // booleano
let pelicula = {                   // objeto
    nombre: 'Spiderman',
    tipo: 'acción',
    calificacion: 8.2
}
let numeros = [0, 1, 1, 2, 3, 5];  // array
let resultado = "10" / 2;          // NaN (Not a Number)
let peso = null;                   // NULL no llega un darto
let altura;                        // undefined, no tiene un valor definido

// console.log()
// -------------
console.log(nombre);                    // muestra en consola el resultado de la variable nombre
console.log('Esta es mi edad ' + edad); // muestra la cadena Esta es mi edad concantenado con el valor de la variable edad 

// Ejecución con Node
node app.js // ejecuta app.js

// Operadores
// ----------
// Nos permiten manipular el valor de las variables y realizar operaciones y comparaciones

// Operadores Aritméticos
// ----------------------
let dato = 10;                          // de asignación: símbolo =
console.log(8 + 4, " suma");            // de suma: símbolo +
console.log(10 - 1, " resta");          // de resta: símbolo -
console.log( 5 * 3, " multiplicación"); // de multiplicación: símbolo *
console.log(11 / 2, "división");        // de división: símbolo /
console.log(11 % 2, "módulo");          // de módulo: símbolo % Módulo es el sobrende de una división
console.log(++dato, "incremento");      // de incremento: símbolo ++
console.log(--dato, "decremento");      // de decremento: símbolo --

// Operadores de comparación
// -------------------------
console.log( 5 == '5', "comparación simple");    // comparación simple. devuelve true si ambos valores son iguales
console.log( 5 === '5', "comparación estricta"); // comparación estricta. devuelve true si ambos valores y ambos tipos de datos son iguales
console.log( 5 != '5', "desigualdad simple");    // desigualdad simple. devuelve false si los valores son iguales
console.log( 5 !== '5', "desigualdad estricta"); // desigualdad estricta. devuelve false si los valores y los tipos de datos son iguales
console.log(5 > 4, "mayor");                     // mayor
console.log(5 >= 14, "mayor o igual");           // mayor o igual
console.log(5 < 7, "menor");                     // menor
console.log(5 <= 7, "menor o igual");            // menor o igual

// Operadores lógicos
// ------------------
let dia = "domingo";
let clima = "soleado";
let esVerdad = true;
console.log(dia == "domingo" && clima == "soleado", "AND"); // AND: símbolo && retorna true si todas las operaciones son verdaderas
console.log(dia == "sabado" || clima == "soleado", "OR");   // OR: símbolo || retorna true si al menos una operación es verdadera
console.log(!esVerdad, "NEGACIÓN");                         // NEGACIÓN: símbolo ! cambia el valor de falso a verdadero o de verdadero a falso

//Operadores de concatenación
//---------------------------
let nombre = "Juana";
let apellido = "De Arco";
let nombreApellido = nombre + ' ' + apellido; // Suma dos string. si se suma un string y un número, el resultado será un string.
console.log(nombreApellido, "concatenación");

// Condicionales
// ------------------
//IF y ELSE
let dato = true;
if (dato) {                  
    console.log('es true');
} else {                     
    console.log('es false');
};

// IF ternario Es una condicion que se escribe en un renglon y constra de una condición, un resultado para TRUE y otro para FALSE
let fruta = 'banana'

let resultado = fruta == 'banana'?  "buenisimo, me gusta la banana": "ufa, yo queria banana"; // la condicion se delimita con el símbolo ?
                                                                                              // las respuesta para verdadero o falso se delimitan con el símbolo :

console.log(resultado);

// SWITCH y CASE
let semaforo = 'violeta';

switch(semaforo){
    case 'verde':
        console.log("Puede cruzar");
        break;
    case 'amarillo':
        console.log("precaución");
        break;
    case 'rojo':
        console.log("no cruce");
        break;
    default:
        console.log("el semaforo no funciona");
        break;
}

function puedePasar (nombre) {
    return(nombre == "Cosme Fulanito"? false : true);
    }

console.log(puedePasar("Cosme Fulanito"));

function findeSemana(dia){
  switch(dia) {	
	    case 'viernes':
      	    return('buen finde');
            break;
	    case 'lunes':
    	    return('buena semana');
        break;
        default:
            return('buen dia');
            break;
    };
};
console.log(findeSemana('jueves'));

// Bucles
// ------
// Nos permiten reiterar un bloque de instrucciones una cantidad de veces determinada o hasta que se cumpla una condición

// For
// ---
for (i=0; i<10; i++) {                     // repite el ciclo mientras que i sea menor a 10
    console.log('el valor de i es ' + i);
};

// While                                        
// -----
let clase = 1;

while (clase < 5) {
    console.log("bienvenido a la clase numero: " + clase); // repite mientras clase sea menor a 5
    clase++;
};

// Do While                                     
// --------
let clases = 6;

do {
    console.log("bienvenido/a a la clase numero: " + clases); // repite el código hasta que clases sea menor a 5, pero por lo menos lo ejecuta 1 vez antes de realizar la comprovación
    clases++;
} while (clases < 5);

function tablaDeMultiplicar(numero) {
	let i = 1;
 	while (i <= 10) {
		 console.log(numero + " * " + i + " = " + numero * i);
		 i++;
	 };
}
tablaDeMultiplicar(5);

// Funciones
// ---------
function esPar(numero){
    return((numero%2) == 0)
};
console.log(esPar(11), 'función es par');

function anterior(numero){
    return(--numero);
};
function triple(numero){
    return(numero*3);
};
function anteriorDelTriple(numero){
    return(anterior(triple(numero)));
};
console.log(anteriorDelTriple(5), 'funcion anterior del triple');
