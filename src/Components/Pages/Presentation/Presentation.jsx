import React, {useEffect} from "react";
import "./presentation.scss";
import guta from "../../../Assets/guta.png";
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Presentation = () => {
  return (
    <section data-aos="fade-right"id="sobre" className="presentation-container gutters">
      <div className="presentation">
        <div className="presentation-img">
          <div className="presentation-text">
            <h1>
              Olá! <br></br>Eu sou a Guta.
            </h1>
            <p>
              Formada em Direito aos 21 anos, Abri mão da profissão para seguir
              uma nova direção, inspirada pela transformação que vivi e pela
              inquietude de saber que eu poderia ajudar outras pessoas. Assim
              nasceu a Guta, Consultora de Imagem.
            </p>
            <p>
              Com diversas formações na área e graduação em Bastidores de Moda
              em Paris, me especializei na Consultoria de Imagem com foco no
              Rebranding de Imagem Pessoal e Corporativo.
            </p>
            <p>
              Faço parte do seleto time de Embaixadoras da Ecole Superieuri de
              Reloking, escola Francesa reconhecida mundialmente na Formação de
              Consultores de Imagem.
            </p>
            <p>
              Com destaque nacional, trago em meu atendimento o foco no
              autoconhecimento, na Imagem Intencional e na liberdade do “ser
              para então vestir”.
            </p>
          </div>
          <img src={guta} alt="woman" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
