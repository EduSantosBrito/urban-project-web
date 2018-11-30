import React, { Component } from "react";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <header>
          <img
            src={require("../../../assets/logo.svg")}
            alt="Logo da Urban, a letra U colorida com duas tonalidades de roxo."
          />
        </header>
        <aside>
          <ul>
            <li>Resumo</li>
            <li>Criar Usuário</li>
            <li>Criar Projeto</li>
          </ul>
        </aside>
      </div>
    );
  }
}
