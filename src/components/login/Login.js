import React, { Component } from "react";
import axios from "axios";
import "./Login.css";

export default class Login extends Component {
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleClick = () => {
    let user = { email: this.state.email, password: this.state.password };
    axios
      .post("http://localhost:8081/users/login/", user, {
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
          <h1>Log into your account</h1>
          <div className="form">
            <input
              className="form__input"
              placeholder="Your email"
              type="text"
              onChange={this.handleEmailChange}
              required
            />
            <input
              className="form__input"
              placeholder="Your password"
              type="password"
              onChange={this.handlePasswordChange}
              required
            />
            <button onClick={this.handleClick}>Log in</button>
          </div>
        </main>
        <footer>
          <p>Copyright © Urban Studios</p>
        </footer>
      </div>
    );
  }
}
