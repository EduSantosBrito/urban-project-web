import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTachometerAlt,
  faUser,
  faProjectDiagram,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faTachometerAlt, faUser, faProjectDiagram, faSignOutAlt);
ReactDOM.render(<App />, document.getElementById("root"));
