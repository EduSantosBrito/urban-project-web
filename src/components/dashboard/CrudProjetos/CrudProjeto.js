import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./CrudProjeto.css";
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
    let user = {
      id_project: this.state.id_project,
      tittle: this.state.tittle,
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
        alert(err.response.data.message);
      });
  };
  render() {
    return (
      <div className="content">
        <Navbar />
        <main>
          <h1>Main content</h1>
        </main>
      </div>
    );
  }
}
