import "./navbar.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { toggleTheme } from "../darkmode/darkmode.js"; // Ajuste o caminho se necessário
import "../darkmode/darkmode.css";

function NavBar() {
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
      <header className="header">
        <nav className="navbar">
          <a href="#" className="logo">
            KAE <span>•</span> TECH
          </a>
          <Link to="/" className="option">
            Início
          </Link>
          <Link to="" className="option">
            Serviços
          </Link>
          <Link to="" className="option">
            Sobre Nós
          </Link>
          <Link to="" className="option">
            Carreiras
          </Link>
          <Link to="" className="option">
            Contato
          </Link>
          <div className="modeLight"></div>
          <div className="modeDark"></div>
        </nav>
        <div className="bar"></div>
      </header>
      <Outlet />
      <footer>
        Copyright © 2024 by KaeTech | Todos os direitos reservados.
      </footer>
    </>
  );
}

export default NavBar;
