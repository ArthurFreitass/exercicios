const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

function AlterarTurno(array, curso, valor) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].course === curso) {
      array[index].shift = valor;
    }
  }
  return array[0];
}

console.log(AlterarTurno(school.lessons, "Python", "Noite"));
