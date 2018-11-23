import React, { Component } from "react";
import "./Login.css";
export default class Login extends Component {
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
            <input className="form__input_username" type="text" required />
            <span className="form__label_username">Your Username</span>
            <input className="form__input_password" type="password" required />
            <span className="form__label_password">Password</span>
            <a href="https://www.google.com">
              <button>Log in</button>
            </a>
            <a href="https://www.google.com">
              <p>Forgot your password?</p>
            </a>
          </div>
        </main>
        <footer>
          <p>Copyright © Urban Studios</p>
        </footer>
      </div>
    );
  }
}
