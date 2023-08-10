const tecnologias = ["HTML", "CSS", "JavasCript", "React", "NodeJs"];

// forEach -- Acceder a cada elemento del array
const forEachArray = tecnologias.forEach((i) => {
  console.log(i);
  return i;
});


// map - crea un nuevo array
const arrayMap = tecnologias.map((tech) => {
  console.log(tech);
  return tech;
});

console.log(forEachArray); // undefined
console.log(arrayMap); // un nuevo array, este se usa mas
