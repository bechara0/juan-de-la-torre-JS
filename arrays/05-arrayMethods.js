const tecnologias = ["HTML", "CSS", "JavasCript", "React", "NodeJs"];
const numeros = [10, 20, 30];

// todo estos array metods no muta el array original

let nuevoArray;

// filter - filter no modifica array original, crea uno nuevo
nuevoArray = tecnologias.filter((e) => e !== "React");
console.log("filter:", nuevoArray);

// comprobar si elemento existe
const resultado = tecnologias.includes("HTML");
console.log("includes:", resultado);

// quiero saber si al menos un numero es mayor a 15
const resultado2 = numeros.some((e) => e > 15);
console.log("some:", resultado2);

// cual es el primero numero mayor a 15
const resultado3 = numeros.find((e) => e > 15);
console.log("find:", resultado3);

// para saber si todos cumplen la condicion

const resultado4 = numeros.every((e) => e > 14);
console.log("every:", resultado4);

// para sumar y acumular los numeros del array
const sumaArray = numeros.reduce((total, numero) => numero + total, 0);
console.log("el total de los num es: ", sumaArray);

// foreach y map

tecnologias.forEach((tech, index) => console.log("Indice array: ", index));
const arrayMap = tecnologias.map((tech) => tech);
console.log("arraymap: ", arrayMap);
