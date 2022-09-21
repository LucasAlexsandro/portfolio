import React from "react";
import * as C from "./Styles";
import { Container } from "../../pages/Home/Styles";

function About() {
  return (
    <>
      <Container>
        <C.AboutContainer>
          <C.AboutContent>
            <C.TitleAbout>Sobre</C.TitleAbout>
          </C.AboutContent>
          <C.TabContainer>
            <C.Tab>
              <C.TabInfo></C.TabInfo>
              <C.Items>
                <C.TabButton color="#ff5e56"></C.TabButton>
                <C.TabButton color="#fabd46"></C.TabButton>
                <C.TabButton color="#2ddc55"></C.TabButton>
              </C.Items>
            </C.Tab>
            <C.Text>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsumlorem ipsum
            </C.Text>
          </C.TabContainer>
        </C.AboutContainer>
      </Container>
    </>
  );
}

export default About;
