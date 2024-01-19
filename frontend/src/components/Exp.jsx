import React from "react";

import styled from "styled-components";
import { Container } from "../pages/Home/Styles";
import ExpItem from "./ExpItem";

export const ExpContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .exp-content-area {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      color: var(--color-primary);
    }

    .exp-grid {
      margin-top: 3rem;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      @media (max-width: 750px) {
        justify-content: center;
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default function Exp() {
  return (
    <ExpContainer>
      <Container>
        <div className="exp-content-area">
          <h1>Experiências Profissionais & Estudo</h1>
          <div className="exp-grid">
            <div className="grids">
              <ExpItem
                icon="https://media.licdn.com/dms/image/C4D03AQHCQ-aeyybS2Q/profile-displayphoto-shrink_800_800/0/1607028003021?e=1709769600&v=beta&t=gh7JQVVUIIlBgyZLZq17F2Rpaq--Erk683-TKDheyKQ"
                empresa="AeC Contact Center"
                cargo="Desenvolvedor Front-End"
                data="10/10/2023 atualmente"
                descricao="Atuando como desenvolvedor"
              />
              <ExpItem
                icon="https://media.licdn.com/dms/image/C4D03AQHCQ-aeyybS2Q/profile-displayphoto-shrink_800_800/0/1607028003021?e=1709769600&v=beta&t=gh7JQVVUIIlBgyZLZq17F2Rpaq--Erk683-TKDheyKQ"
                empresa="AeC Contact Center"
                cargo="QA Analyst - Pleno"
                data="10/10/2023 atualmente"
                descricao="Atuando como QA"
              />
              <ExpItem
                icon="https://media.licdn.com/dms/image/C4D03AQHCQ-aeyybS2Q/profile-displayphoto-shrink_800_800/0/1607028003021?e=1709769600&v=beta&t=gh7JQVVUIIlBgyZLZq17F2Rpaq--Erk683-TKDheyKQ"
                empresa="AeC Contact Center"
                cargo="I.T Support"
                data="10/10/2023 atualmente"
                descricao="Atuando como i.t support"
              />
            </div>
            <div className="grids">
              <ExpItem
                icon="https://pbs.twimg.com/profile_images/1714345331142295552/HPPRN7el_400x400.jpg"
                empresa="Engenharia de software"
                // cargo="Desenvolvedor Front-End"
                data="Cursando"
                descricao="Estou atualmente cursando Engenharia de Software,
                 onde estou aprimorando minhas habilidades em design de software, 
                 arquitetura de sistemas e metodologias de desenvolvimento ágeis. 
                 Este curso oferece uma base sólida para compreender os princípios 
                 fundamentais da engenharia de software."
              />
              <ExpItem
                icon="https://pbs.twimg.com/profile_images/1729334778539696128/sfKQV_6s_400x400.jpg"
                empresa="Front-end Development"
                // cargo="Desenvolvedor Front-End"
                data="Finalizado"
                descricao="Aprimorando as habilitades no curso de front end para criação de telas com frameworks atuais"
              />
            </div>
          </div>
        </div>
      </Container>
    </ExpContainer>
  );
}
