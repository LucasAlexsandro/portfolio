import React from "react";
import * as A from "./Styles";
import { Container } from "../../pages/Home/Styles";
import Profile from "../../assets/profile.jpg";

import Logo from "../../assets/images/logo.png";
import Button from "../button";

export default function About() {
  return (
    <>
      <A.AboutContainer>
        <Container>
          <div className="about-grid">
            <div className="about-area-text">
              <h2>
                Lucas <span>Alexsandro</span>
              </h2>
              <p>
                Olá, meu nome é Lucas Alexsandro e sou um desenvolvedor web com
                dois anos de experiência na área. Sou apaixonado e dedicado ao
                meu trabalho, buscando constantemente novos desafios e
                oportunidades de aprendizado. Meu objetivo é criar soluções web
                criativas e funcionais que atendam às necessidades dos meus
                clientes e proporcionem uma experiência excepcional aos
                usuários. Explore meu portfólio e veja como posso contribuir
                para o sucesso do seu projeto.
              </p>
              <Button text="Ver mais" />
            </div>
            <div className="about-area-img">
              <div className="grid-item">
                <img src={Profile} />
              </div>
              <div className="grid-item">
                <img src="https://www.techreviews.com.br/wp-content/uploads/2021/07/notebook-para-programar-0-coding-924920_1920.jpg" />
              </div>
              <div className="grid-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Centro_de_Mossor%C3%B3_%28RN%29.jpg" />
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className="about-section-data">

          </div>
        </Container>
      </A.AboutContainer>
    </>
  );
}
