import React from "react";
import * as S from "./Styles";
import { FcMultipleDevices } from "react-icons/fc";
import Cell from "../../assets/images/mobile-dynamic-gradient.png";
import WebDev from "../../assets/images/perspective_matte-451-128x128.png";
import QA from "../../assets/images/perspective_matte-458-128x128.png";
import WebDesign from "../../assets/images/perspective_matte-437-128x128.png";

function Services() {
  return (
    <S.ServicesArea>
      <div className="container">
        <S.ServicesContainer>
          <h5>Minhas Especialidades</h5>
          <h1 className="mt-3">Como posso ajudar o seu negócio!</h1>
          <div className="service-grid-cards">
            <div className="service-card">
              <div className="service-card-logo">
                <img src={WebDev} />
              </div>
              <div className="service-content">
                <h3>Web Development</h3>
                <p>
                  Transformando ideias em código para construir experiências
                  interativas na web.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-logo">
                <img src={WebDesign} />
              </div>
              <div className="service-content">
                <h3>Web Design</h3>
                <p>
                  Criando layouts atraentes e funcionais para transmitir
                  mensagens e envolver os usuários online.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-logo">
                <img src={Cell} />
              </div>
              <div className="service-content">
                <h3>Responsive</h3>
                <p>
                  Adaptando-se perfeitamente a diferentes dispositivos e
                  tamanhos de tela para proporcionar uma experiência consistente
                  e acessível aos usuários.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-logo">
                <img src={QA} />
              </div>
              <div className="service-content">
                <h3>QA</h3>
                <p>
                  Garantindo a excelência e a confiabilidade de produtos e
                  serviços por meio de testes rigorosos, identificação de
                  problemas e melhoria contínua.
                </p>
              </div>
            </div>
          </div>
        </S.ServicesContainer>
      </div>
    </S.ServicesArea>
  );
}

export default Services;