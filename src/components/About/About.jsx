import React from "react";
import * as C from "./Styles";
import { Container } from "../../pages/Home/Styles";

function About() {
  return (
    <>
      <Container>
        <C.AboutContainer>
          <C.AboutLeft>
            <C.SubTitle>SOBRE MIM</C.SubTitle>
            <C.Title>DESENVOLVEDOR WEB & QA</C.Title>
            <C.Content>
              Oiii! Meu nome é <span>Lucas Alexsandro</span>. Sou Desenvolvedor web e QA. Sou muito
              apaixonado e dedicado ao meu trabalho. Com 2 anos de experiência
              como Desenvolvedor web e QA profissional, adquiri as habilidades e
              conhecimentos necessários para tornar seu projeto um sucesso.
            </C.Content>
            <C.Counter>
              <C.CountItem>
                <C.CountNumber>+02</C.CountNumber>
                <C.CountInfo>Anos de Experiência</C.CountInfo>
              </C.CountItem>
              <C.CountItem>
                <C.CountNumber>+06</C.CountNumber>
                <C.CountInfo>Projetos Completos</C.CountInfo>
              </C.CountItem>
              <C.CountItem>
                <C.CountNumber>+600</C.CountNumber>
                <C.CountInfo>Copos de Café</C.CountInfo>
              </C.CountItem>
            </C.Counter>
            <C.Button>Download CV</C.Button>
          </C.AboutLeft>
          <C.AboutRight>
            <C.AboutTab></C.AboutTab>
          </C.AboutRight>
        </C.AboutContainer>
      </Container>
    </>
  );
}

export default About;
