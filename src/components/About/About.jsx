import React, { useState, useEffect } from "react";
import * as C from "./Styles";
import { Container } from "../../pages/Home/Styles";
import IconBoots from "../../assets/images/icon-bots.png";
import IconSelenium from "../../assets/images/icon-selenium.png";
import data from "./Data.json";

function About({ skills }) {
  const [tabActive, setTabActive] = useState(0);

  const activateTab = (index) => {
    setTabActive(index);
  };

  const [lenguages, setLenguages] = useState([]);

  useEffect(() => setLenguages(data), []);

  return (
    <>
      <Container>
        <C.AboutContainer>
          <C.AboutLeft>
            <C.SubTitle>SOBRE MIM</C.SubTitle>
            <C.Title>DESENVOLVEDOR WEB & QA</C.Title>
            <C.Content>
              Oiii! Meu nome é <span>Lucas Alexsandro</span>. Sou Desenvolvedor
              web e QA. Sou muito apaixonado e dedicado ao meu trabalho. Com 2
              anos de experiência como Desenvolvedor web e QA profissional,
              adquiri as habilidades e conhecimentos necessários para tornar seu
              projeto um sucesso.
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
            <C.Button>Meu resumo</C.Button>
          </C.AboutLeft>
          <C.AboutRight>
            <C.AboutTab>
              <C.TabLink>Skills</C.TabLink>
              <C.TabLink>Experience</C.TabLink>
              <C.TabLink>Education</C.TabLink>
            </C.AboutTab>
            <C.TabBody>
              {lenguages.length === 0 ? (
                <p>Nenhum item encontrado</p>
              ) : (
                lenguages.map((lenguage) => (
                  <C.SkillItem key={lenguage.id}>
                    <C.SkillIco src={lenguage.icon}></C.SkillIco>
                    <C.SkillText>{lenguage.nome}</C.SkillText>
                  </C.SkillItem>
                ))
              )}
            </C.TabBody>
          </C.AboutRight>
        </C.AboutContainer>
      </Container>
    </>
  );
}

export default About;
