const producto = {
  name: "Heladera",
  precio: 300,
  disponibilidad: true,
};

const cliente = {
  name: "juan",
  premium: true,
};

const { name, precio, disponibilidad } = producto;
const { name: nameCliente, premium } = cliente; // creo variable con alias para name, ya que si no da error porque name ya se uso en el otro objeto
console.log(name);
console.log(nameCliente);
