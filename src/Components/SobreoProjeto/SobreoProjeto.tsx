import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <section className="jumbotron text-center corPrimaria" id="sobre-mim">
      <div className="container">
        <h2 className="jumbotron-heading titulosBrancos">Sobre o Projeto</h2>
        <p className="lead paragrafoBrancos">
         Projeto para popular um banco de dados que contém as tabelas de cadastro de pontos de localização
          em Corumbá MS, além de cadastrar charadas e pontuações de jogadores para um futuro jogo : )
        </p>
      </div>
    </section>
  );
}
