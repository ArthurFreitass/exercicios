// Formas de ser criar cookies

document.cookie = "user=Programador";

// Ao fechar o navegador será expirado
// podemos adicionar uma data de expiração para isso não ocorrer

document.cookie =
  "user=Programador; email=programador@email.com; expires=Sun, 20 Mar 2025 11:00:00 UTC; path=/";

// Criando recebendo o valor em uma variável

document.cookie = "expires=Fri, 1 Jan 2026 00:00:00 UTC";
const cookieUser = document.cookie;
console.log(cookieUser);
