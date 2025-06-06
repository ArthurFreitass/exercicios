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

console.log(school);

function CheckKey(array, nomeChave) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index][nomeChave] !== undefined) {
      return true;
    }
  }
  return false;
}

console.log(CheckKey(school.lessons, "LUCAS"));
