 const producto = {
  name: "Heladera",
  precio: 300,
  disponibilidad: true,
};

// reescribir valor
producto.name = "Consolador";

console.log(producto);

//agregar valor
producto.color = "red";
console.log(producto);

// borrar propiedad
delete producto.color;
console.log(producto);

// para que se puedan modificar propiedades, pero no añadir ni eliminar
Object.seal(producto);

// para evitar que s epuedan realizar modificaciones
Object.freeze(producto);
producto.name = "cierra";
console.log(producto);
