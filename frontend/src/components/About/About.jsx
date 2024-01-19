import React from "react";
import * as A from "./Styles";
import { Container } from "../../pages/Home/Styles";
import Profile from "../../assets/profile.jpg";

import Logo from "../../assets/images/logo.png";
import Button from "../Button";

export default function About() {
  return (
    <>
      <A.AboutContainer>
        <Container>
          <div className="about-area">
            <div className="about-content">
              <div className="about-content-text">
                <h3>Sobre</h3>
                <h1>Transformando visões em incríveis negócios</h1>
                <p>
                  Sou um profissional de Desenvolvimento web. Crio sites
                  responsivos e funcionais para oferecer a melhor experiência
                  aos usuários. Explore meu portfolio e conheça mais sobre mim.
                </p>
              </div>
              <div className="about-content-img"></div>
            </div>
          </div>
        </Container>
      </A.AboutContainer>
    </>
  );
}
