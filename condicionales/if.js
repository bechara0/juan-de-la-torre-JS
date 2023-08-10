const disponible = 4000;
const retirar = 20000;

if (disponible > retirar) {
  console.log("Retira tu dinero");
} else {
  console.log(`saldo insuficionete, faltan ${retirar - disponible} pesos`);
}
