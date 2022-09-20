import React from 'react'
import * as C from "./Styles";

function About() {
  return (
    <>
      <C.AboutContainer>
          <C.Tab>
            <C.TabInfo>Sobre</C.TabInfo>
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
        </C.AboutContainer>
    </>
  )
}

export default About