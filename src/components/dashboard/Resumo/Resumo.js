import React, { Component, Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import "./Resumo.css";
import axios from "axios";
import createHistory from "history/createBrowserHistory";
export default class Resumo extends Component {
  getData = () => {
    axios
      .all([
        axios.get("http://localhost:8081/users/get/all"),
        axios.get("http://localhost:8081/project/get/all")
      ])
      .then(
        axios.spread((userRes, projectRes) => {
          const userList = userRes.data.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email
          }));
          this.setState({ userList });
          const projectList = projectRes.data.map(project => ({
            id: project.id,
            title: project.title,
            description: project.description
          }));
          this.setState({ projectList });
        })
      );
  };
  deleteProject = id => {
    axios.delete(`http://localhost:8081/project/delete/${id}`).then(res => {
      const history = createHistory();
      history.push("/dashboard/");
      history.go("/dashboard/");
    });
  };
  deleteUser = id => {
    axios.delete(`http://localhost:8081/users/delete/${id}`).then(res => {
      const history = createHistory();
      history.push("/dashboard/");
      history.go("/dashboard/");
    });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="content">
        <Navbar />
        <main className="content__main_resumo">
          <h1 className="main__h1">Resumo</h1>
          <div className="main__div">
            <section className="div__section_user">
              <h1>Tabela de usuários</h1>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state && this.state !== null
                    ? this.state.userList.map(data => {
                        return (
                          <Fragment key={data.id}>
                            <tr key={data.id}>
                              <td>{data.name}</td>
                              <td>{data.email}</td>
                              <td>
                                <button
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        "Deseja confirmar a exclusão desse usuário?"
                                      )
                                    )
                                      this.deleteUser(data.id);
                                  }}
                                >
                                  Excluir
                                </button>
                              </td>
                            </tr>
                          </Fragment>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </section>
            <section className="div__section_project">
              <h1>Tabela de projetos</h1>
              <table>
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state && this.state !== null
                    ? this.state.projectList && this.state.projectList !== null
                      ? this.state.projectList.map(data => {
                          return (
                            <Fragment key={data.id}>
                              <tr>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td>
                                  <button
                                    onClick={() => {
                                      if (
                                        window.confirm(
                                          "Deseja confirmar a exclusão desse projeto?"
                                        )
                                      )
                                        this.deleteProject(data.id);
                                    }}
                                  >
                                    Excluir
                                  </button>
                                </td>
                              </tr>
                            </Fragment>
                          );
                        })
                      : null
                    : null}
                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>
    );
  }
}
