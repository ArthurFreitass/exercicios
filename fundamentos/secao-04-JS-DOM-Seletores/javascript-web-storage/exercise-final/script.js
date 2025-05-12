// Evento

window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector(".content");
    content.style.backgroundColor = color;
  };

  const setFontColor = (color) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color;
    }
  };

  const setFontSize = (size) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size;
    }
  };

  const setLineHeight = (height) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height;
    }
  };

  const setFontFamily = (family) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family;
    }
  };

  // Salvando cada função no storage

  // Função número 1 (backgroundColor):

  const corSalva = localStorage.getItem("backgroundColor");
  if (corSalva) {
    setBackgroundColor(corSalva);
  }

  // Função número 2 (fontColor):

  const fonteSalva = localStorage.getItem("fontColor");
  if (fonteSalva) {
    setFontColor(fonteSalva);
  }

  // Função número 3 (fontSize)

  const fontSize = localStorage.getItem("fontSize");
  if (fontSize) {
    setFontSize(fontSize);
  }

  // Função número 4 (lineHeight)
  const lineHeight = localStorage.getItem("lineHeight");
  if (lineHeight) {
    setLineHeight(lineHeight);
  }

  // Função número 5 (font family)

  const fontFamily = localStorage.getItem("fontFamily");
  if (fontFamily) {
    setFontFamily(fontFamily);
  }

  // Cor de fundo da tela;
  let backgroundColorButtons = document.querySelectorAll(
    "#background-color>button"
  );

  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", (event) => {
      setBackgroundColor(event.target.innerHTML);
      const cor = event.target.innerHTML;
      localStorage.setItem("backgroundColor", cor);
    });
  }

  // Cor do texto;
  let fontColorButtons = document.querySelectorAll("#font-color>button");
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", (event) => {
      setFontColor(event.target.innerHTML);
      const fontColor = event.target.innerHTML;
      localStorage.setItem("fontColor", fontColor);
    });
  }

  // Tamanho da fonte
  let fontSizeButtons = document.querySelectorAll("#font-size>button");
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML);
      const fontSize = event.target.innerHTML;
      localStorage.setItem("fontSize", fontSize);
    });
  }

  // Espaçamento entre as linhas do texto;
  let lineHeightButtons = document.querySelectorAll("#line-height>button");
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", (event) => {
      setLineHeight(event.target.innerHTML);
      // Basta criar uma variável para receber o valor
      const lineHeight = event.target.innerHTML;
      localStorage.setItem("lineHeight", lineHeight);
    });
  }

  // Tipo da fonte (_Font family_).
  let fontFamilyButtons = document.querySelectorAll("#font-family>button");
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML);
      const fontFamily = event.target.innerHTML;
      localStorage.setItem("fontFamily", fontFamily);
    });
  }
};
