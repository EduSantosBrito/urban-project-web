import React, { Component } from "react";
import axios from "axios";

export default class CrudProjeto extends Component {
  handleId_projectChange = e => {
    this.setState({ id_project: e.target.value });
  };
  
  handleTittleChange = e => {
    this.setState({ tittle: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleClick = () => {
    let user = { id_project: this.state.id_project, tittle: this.state.tittle, description: this.state.description};
    axios
      .post("http://localhost:8081/project/add", user, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        localStorage.setItem("tokenAuth", res.data);
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  };
  render() {
    return (
      <div className="site">
        <aside />
        <main>
          <img
            src={require("../../assets/logo.svg")}
            alt="Logo da Urban, a letra U colorida com duas tonalidades de roxo."
          />
          <h1>Insert a new Project</h1>
          <div className="form">
            <input
              className="form__input"
              placeholder="Id Projeto"
              type="number"
              onChange={this.handleId_projectChange}
              required
            />

            <input
              className="form__input"
              placeholder="Tittle Project"
              type="text"
              onChange={this.handleTittleChange}
              required
            />            

            <input
              className="form__input"
              placeholder="Description"
              type="text"
              onChange={this.handleDescriptionChange}
              required
            />
            <button onClick={this.handleClick}>Enviar Projeto</button>
          </div>
        </main>
        <footer>
          <p>Copyright © Urban Studios</p>
        </footer>
      </div>
    );
  }
}
