import "./home.css";
import { useEffect } from "react";
import { toggleTheme } from "../../components/darkmode/darkmode.js"; // Ajuste o caminho se necessário
import "../../components/darkmode/darkmode.css";

function Home() {
  useEffect(() => {
    toggleTheme(); // Aplica o tema salvo quando o componente é montado

    const modeLight = document.querySelector(".modeLight");
    const modeDark = document.querySelector(".modeDark");

    if (modeLight && modeDark) {
      modeLight.addEventListener("click", toggleTheme);
      modeDark.addEventListener("click", toggleTheme);
    }

    // Limpeza dos event listeners
    return () => {
      if (modeLight && modeDark) {
        modeLight.removeEventListener("click", toggleTheme);
        modeDark.removeEventListener("click", toggleTheme);
      }
    };
  }, []);
  return (
    <>
      <div className="containerHome">
        <h1>Olá</h1>
      </div>
    </>
  );
}

export default Home;
