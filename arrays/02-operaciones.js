const tecnologias = ["HTML", "CSS", "JS", "PHP", "React", "NodeJS"];
console.table(tecnologias);

// añadir elementos
// tecnologias.push("Java"); no porque modifica original

const newArray = ["Java", ...tecnologias];

console.table(newArray);

//eliminar elementos
// no uso .pop, .splice ni .shift porque modifican array original
const array2 = tecnologias.filter((tech) => {
  return tech !== "CSS";
});
console.table(array2);

//reemplazar
const array3 = tecnologias.map((tech) => {
  if (tech === "PHP") {
    return "Kobol";
  } else {
    return tech;
  }
});

console.table(array3)
