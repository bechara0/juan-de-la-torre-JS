const precio = 300;

function unaFuncion() {
  const precio = 600;
  console.log("Precio dentro funcion", precio);
}
unaFuncion();

console.log("precio fuera funcion", precio);
