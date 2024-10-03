import React from "react";
import "./investiment.scss";

export const Investiment = () => {
  return (
    <section className="investiment-container">
      <div className="investiment">
        <div className="investiment-content">
          <header className="investiment-header">
            <h1>Transmita a sua Essência.</h1>
            <p>
              Reposicione sua imagem pessoal e/ou a imagem da sua marca e traga
              clareza e objetividade para a mensagem que você comunica.
            </p>
          </header>
          
          <article className="investment-details">
            <h2>Pelo investimento de</h2>
            <h1 className="investment-price">R$440,00</h1>
            <h2>em até 3x</h2>
            <h1>À vista, receba 10% de desconto</h1>
          </article>

          <button className="cta-button">Garanta seu lugar</button>

          <footer className="investment-footer">
            <h2>Atenção! Vagas limitadas: somente 8 pessoas por grupo.</h2>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Investiment;
