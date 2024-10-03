import React from "react";
import "./home.scss";
import woman from "../../Assets/womanedited.png";

export const Home = () => {
  return (
    <section className="home-section">
      <div className="home">
        <div className="home-content">
          <div className="textDiv">
            <h1>Consultoria em Grupo</h1>
            <p>
              Uma tarde imersiva na descoberta da sua essência e na criação de
              uma imagem harmônica e confiante.
            </p>

            <button className="btn">Garanta seu lugar</button>
          </div>
          <img src={woman} alt="mulher"></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
