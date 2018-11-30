import React, { Component } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./CrudUsuario.css";

export default class CrudUsuario extends Component {
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handlePermissionTypeChange = e => {
    this.setState({ permissionType: e.target.value });
  };

  handleClick = () => {
    console.log(this.state.permissionType);
    console.log(this.state.permissionType === "Administrador");
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      permissionType: this.state.permissionType === "Administrador" ? 1 : 2
    };
    axios
      .post("http://localhost:8081/users/add", user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenAuth")}`
        }
      })
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="content">
        <Navbar />
        <main className="content__main">
          <h1>Criar novo usuário</h1>
          <div className="form">
            <label className="form__label">Seu nome</label>
            <input
              className="form__input"
              type="text"
              onChange={this.handleNameChange}
              required
            />
            <label className="form__label">Seu email</label>
            <input
              className="form__input"
              type="text"
              onChange={this.handleEmailChange}
              required
            />
            <label className="form__label">Sua senha</label>
            <input
              className="form__input"
              type="password"
              onChange={this.handlePasswordChange}
              required
            />
            <label className="form__label">Nível de permissão (opcional)</label>
            <input
              className="form__input"
              type="text"
              onChange={this.handlePermissionTypeChange}
              required
            />
            <button onClick={this.handleClick}>Cadastrar</button>
          </div>
        </main>
      </div>
    );
  }
}
