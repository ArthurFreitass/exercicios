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

function ReturnsKeyValue(array, index) {
  return array[index].course;
}

const SumStudents = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index].students;
  }
  return sum;
};

console.log(ReturnsKeyValue(school.lessons, 2));

console.log(SumStudents(school.lessons));
