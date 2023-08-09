const tecnologias = ["HTML", "CSS", "JS", "PHP", "React", "NodeJS"];

const array2 = tecnologias.filter((tech) => {
  return tech !== "CSS";
});
console.table(array2);
