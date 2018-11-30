import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./CrudProjeto.css";
import axios from "axios";

export default class CrudProjeto extends Component {
  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleClick = () => {
    let user = {
      title: this.state.title,
      description: this.state.description
    };
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
        console.log(err);
      });
  };
  render() {
    return (
      <div className="content">
        <Navbar />
        <main className="content__main">
          <h1>Criar novo projeto</h1>
          <div className="form">
            <label className="form__label">Título do projeto</label>
            <input
              className="form__input"
              type="text"
              onChange={this.handleTitleChange}
              required
            />
            <label className="form__label">Descrição do projeto</label>
            <textarea
              className="form__textarea"
              onChange={this.handleDescriptionChange}
              required
            />
            <button onClick={this.handleClick}>Cadastrar</button>
          </div>
        </main>
      </div>
    );
  }
}
