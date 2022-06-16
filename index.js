//Bucle For
let cantidadNumeros = parseInt(prompt("¿Cuántos números de la sucesión de Fibonacci queres conocer?:"));
let num1 = 0;
let num2 = 1;

for (let i = 0; i < cantidadNumeros; i++) {
    let num3 = num1 + num2;
    alert(`Numero ${i + 1} : ${num1}`);
    num1 = num2;
    num2 = num3;
}

// Bucle While
let usuario = prompt("Ingrese su usuario:");
let contraseña = prompt("Ingrese su contraseña:");

while (usuario !== "coderhouse" || contraseña !== "javascript") {
    alert("Usuario y/o contraseña incorrecto. Intente nuevamente");
    usuario = prompt("Ingrese su usuario:");
    contraseña = prompt("Ingrese su contraseña:");
}
alert("BIENVENIDO");

