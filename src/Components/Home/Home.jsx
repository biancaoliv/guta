import React from "react";
import './Home.scss'
import woman from "../../Assets/womanedited.png";

export const Home = () => {

  const handleButtonClick = () => {
    window.location.href ='https://api.whatsapp.com/send?phone=5547997257509&text=Quero%20garantir%20minha%20vaga%20na%20consultoria!😀'
  }

  return (
    <section id='inicio' className="home-section gutters">
      <div className="home">
        <div className="home-content">
          <div className="textDiv">
            <h1>Consultoria em Grupo</h1>
            <p>
              Uma tarde imersiva na descoberta da sua essência e na criação de
              uma imagem harmônica e confiante.
            </p>

            <button className="btn" onClick={handleButtonClick}>Garanta seu lugar</button>
          </div>
          <img src={woman} alt="mulher"></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
