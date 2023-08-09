// function declarations

function sumar(a = 0, b = 0) {
  console.log(a + b);
}

sumar(2, 5);

// funciones que retornan valor

function restar(a, b) {
  return a - b;
}

const resultado = restar(4, 1);
console.log(resultado);
