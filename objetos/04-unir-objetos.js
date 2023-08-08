const producto = {
  name: "Heladera",
  precio: 300,
  disponibilidad: true,
};

const cliente = {
  name: "juan",
  premium: true,
};

// el problema aca es que ambos tienen la propiedad name, solucion:
// este metodo no modifica objetos originales, esto es obligatorio en los estados de react
const nuevoObjeto = {
  producto: { ...producto },
  cliente: { ...cliente },
};
console.log(nuevoObjeto);
