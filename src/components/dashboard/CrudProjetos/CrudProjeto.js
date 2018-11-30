import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./CrudProjeto.css";
export default class CrudProjeto extends Component {
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
