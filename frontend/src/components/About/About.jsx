import React from "react";
import * as A from "./Styles";
import { Container } from "../../pages/Home/Styles";

import Profile from "../../assets/images/lucas5.png";

export default function About() {
  return (
    <>
      <A.AboutContainer>
        <Container>
          <A.AboutArea>
            <div className="about-area-text">
              <div className="about-area-description">
                <p>
                  Olá! Meu nome é <span>Lucas Alexsandro</span>. Sou
                  Desenvolvedor web e QA. Sou muito apaixonado e dedicado ao meu
                  trabalho. Com 2 anos de experiência como Desenvolvedor web e
                  QA profissional, adquiri as habilidades e conhecimentos
                  necessários para tornar seu projeto um sucesso.
                </p>
              </div>
            </div>
            <div className="about-area-tabs">
              <div className="tab-header">
                <div className="tab-header-item">Stacks</div>
                <div className="tab-header-item">Experiencia</div>
                <div className="tab-header-item">Cursos</div>
              </div>
            </div>
          </A.AboutArea>
        </Container>
      </A.AboutContainer>
    </>
  );
}
