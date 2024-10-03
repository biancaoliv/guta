import React from "react";
import "./main.scss";
import square from "../../Assets/square.png";

export const Main = () => {
  return (
    <section className="main-container">
      <div className="main">
        <div className="main-content">
          <img src={square} alt="mulher" />
          <div className="text">
            <h1>A consultoria é composta por:</h1>
            <h2>Cores de Essência</h2>
            <p>
              Um método único em que abordamos as características da sua
              personalidade além de uma cartela de cores.
            </p>
            <h2>Estilo Pessoal</h2>
            <p>
              O momento de explorar os diferentes estilos e suas combinações
              para você descobrir quais deles te personificam.
            </p>
            <h2>Teste de Coloração Pessoal</h2>
            <p>
              Muito mais do que saber as cores que te favorecem, você entenderá
              mais sobre si mesmo através do olhar da Morfopsicologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
