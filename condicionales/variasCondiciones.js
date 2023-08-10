const saldo = 600;
const pagar = 700;
const tarjeta = true;

if (saldo >= pagar) {
  console.log("Puedes Pagar");
} else if (tarjeta) {
  console.log("Puedes pagar con tu tarjeta");
} else {
  console.log("No puedes pagar");
}
// mejor forma

if (saldo >= pagar || tarjeta) {
  console.log("Sí puedes pagar");
} else {
  console.log("Saldo insuficiente");
}
