producto = {
  name: "Heladera",
  precio: 300,
  disponibilidad: true,
};

console.log(producto);
console.log(producto.name);

console.log("________");

// destructuring
const { name, precio, disponibilidad } = producto;
console.log(name);
console.log(precio);
console.log(disponibilidad);

console.log("________");

// Object literal enhacement
const autenticado = true;
const usuario = "Juan";

const nuevoObjeto = {
  autenticado,
  usuario,
};

console.table(nuevoObjeto);

console.log("________");
