import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CrudUsuario from "./CrudUsuario/CrudUsuario";
import CrudProjeto from "./CrudProjetos/CrudProjeto";
import Resumo from "./Resumo/Resumo";
import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard/crud-usuario" component={CrudUsuario} />
          <Route path="/dashboard/crud-projeto" component={CrudProjeto} />
          <Route path="/dashboard/" component={Resumo} />
        </Switch>
      </BrowserRouter>
    );
  }
}
