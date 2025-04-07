// INSTRUÇÕES
// Remova a tag h2, filha do elemento where-are-you.

// pegando elemento where-are-you

const father_Where = document.getElementById("where-are-you");

// Removendo o h2

father_Where.removeChild(father_Where.firstElementChild);
