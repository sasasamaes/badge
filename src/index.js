//Importar Librerias
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Estilos
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
// Componentes
import Navbar from "./components/Navbar";
import BadgePage from "./pages/BadgePage";
import FetchPage from "./pages/FetchPage";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <div className="BadgeNew__hero"></div>
    <Switch>
      <Route exact path="/" component={BadgePage} />
      <Route exact path="/fetch" component={FetchPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
