import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import createHistory from "history/createBrowserHistory";
import "./Navbar.css";
export default class Navbar extends Component {
  logOff = () => {
    const history = createHistory();
    history.push("/");
    history.go("/");
  };
  render() {
    return (
      <div className="navbar">
        <header>
          <img
            src={require("../../../assets/logo-white.svg")}
            alt="Logo da Urban, a letra U colorida com duas tonalidades de roxo."
          />
        </header>
        <aside>
          <ul>
            <li>
              <FontAwesomeIcon
                icon="tachometer-alt"
                color="white"
                className="icon"
              />
              <Link to="/dashboard/">Resumo</Link>
            </li>
            <li>
              <FontAwesomeIcon icon="user" color="white" className="icon" />
              <Link to="/dashboard/crud-usuario">Criar usuário</Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon="project-diagram"
                color="white"
                className="icon"
              />
              <Link to="/dashboard/crud-projeto">Criar projeto</Link>
            </li>
          </ul>
        </aside>
        <footer>
          <FontAwesomeIcon icon="sign-out-alt" color="white" className="icon" />
          <Link to="/" onClick={this.logOff}>
            Sair
          </Link>
        </footer>
      </div>
    );
  }
}
