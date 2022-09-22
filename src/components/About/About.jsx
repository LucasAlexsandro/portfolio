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
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
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
            teste teste  teste teste  teste teste  teste teste  vteste teste teste teste 
          </C.AboutRight>
      </C.AboutContainer>
      </Container>
    </>
  );
}

export default About;
