let miVariable = "Hola, UCampers!";
console.log(miVariable);

const PI = 3.141615;
console.log(PI);

let miArray = [1,2,3];
console.log(miArray[0]);

miArray.pop()
console.log(miArray);

miArray.push(4);
console.log(miArray);

const miObjeto = {
  llaveA : "valorA",
  llaveB : "valorB"
};

console.log(miObjeto);

// miObjeto["llaveA"] = "Nuevo Valor"
// console.log(miObjeto);

//const miObjeto2 = miObjeto //ByReference
const miObjeto2 = Object.assign({}, miObjeto) //ByValue
miObjeto2["llaveA"] = "Nuevo Valor"

console.log(miObjeto, miObjeto2);

//Declaramos la función tradicional miFuncion
function miFuncion() {
  console.log("Hola, UCampers!");
};

//Llamar la función miFunción
miFuncion();

//Declaramos una arrow function miArrowFuncion
const miArrowFuncion = () => {console.log("Mi primera Arrow Function")};

//Llamamos la arrow function miArrowFuncion
miArrowFuncion();

//Condicional Simple
//Realizar la suma de dos valores si el primer valor es mayor que cero
let valorA = 1;
let valorB = 10;
let resultado;

if (valorA > 0) {
  console.log("ValorA mayor que cero");
};

//Condicional doble
if (valorA > 0) {
  console.log("ValorA mayor que cero");
  resultado = valorA + valorB;
  console.log(resultado);
} else {
  console.log("ValorA menor o igual a cero");
};