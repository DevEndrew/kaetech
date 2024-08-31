export function toggleTheme() {
  // Seleciona os elementos navbar, footer e home
  const navbar = document.querySelector(".navbar");
  const footer = document.querySelector("footer");
  const home = document.querySelector(".containerHome");

  // Verifica se todos os elementos foram encontrados
  if (!navbar || !footer || !home) {
    console.error("Um ou mais elementos não foram encontrados");
    return;
  }

  // Define o estado do modo atual com base na presença da classe 'dark-mode'
  const DarkMode = navbar.classList.contains("dark-mode");

  // Define as classes e estilos de acordo com o modo atual
  const themeClasses = DarkMode
    ? { add: "light-mode", remove: "dark-mode" }
    : { add: "dark-mode", remove: "light-mode" };
  const backgroundColor = DarkMode ? "#ffffff" : "#1b1b1b";
  const textColor = DarkMode ? "#000000" : "#ffffff";
  const iconLightDisplay = DarkMode ? "block" : "none";
  const iconDarkDisplay = DarkMode ? "none" : "block";

  // Atualiza as classes dos elementos
  [navbar, footer, home].forEach((element) => {
    if (element) {
      element.classList.remove(themeClasses.remove);
      element.classList.add(themeClasses.add);
    }
  });

  // Atualiza o estilo dos elementos
  document
    .querySelector(".modeLight")
    ?.setAttribute("style", `display: ${iconLightDisplay}`);
  document
    .querySelector(".modeDark")
    ?.setAttribute("style", `display: ${iconDarkDisplay}`);
  home.style.backgroundColor = backgroundColor;
  home.style.color = textColor;
  document.querySelector(".logo")?.setAttribute("style", `color: ${textColor}`);
  footer.style.color = textColor;
}
