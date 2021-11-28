import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./section.css";

export default function Navbar() {
  return (
    <section className="jumbotron text-center corPrimaria">
      <div className="container">
        <img src="" className="foto-perfil" alt="Responsive image" />
        <h1
          className="jumbotron-heading"          
        >
          Pocke Pan - Cadastre localizações em Corumbá para receber charadas
        </h1>
        <p className="lead" style={{ color: "white !important" }}>
          
        </p>
        <p>
          <a
            href="https://github.com/Miss-Dev"
            className="btn btn-dark my-2"
            target="_blank"
          >
            Projeto no Github
          </a>
        </p>
        <a href="#">
          <i style={{ color: "white" }} className="fab fa-github"></i>
        </a>
        <a href="#">
          <i style={{ color: "white" }} className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i style={{ color: "white" }} className="fab fa-instagram"></i>
        </a>
      </div>
    </section>
  );
}
