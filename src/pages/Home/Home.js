import React from "react";
import * as C from "./Styles";

import Logo from "../../assets/images/logo.png";
import {
  FaGithubAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <C.Container>
        <C.Profile>
          <C.LogoContainer>
            <img src={Logo} alt="logo lucas" />
          </C.LogoContainer>
          <C.TextName>Lucas Alexsandro</C.TextName>
          <C.TextDev>Web Developer</C.TextDev>
          <C.Social>
            <C.SocialItem>
              <C.SocialLink>
                <FaLinkedinIn />
              </C.SocialLink>
            </C.SocialItem>
            <C.SocialItem>
              <C.SocialLink>
                <FaBehance />
              </C.SocialLink>
            </C.SocialItem>
            <C.SocialItem>
              <C.SocialLink>
                <FaFacebookF />
              </C.SocialLink>
            </C.SocialItem>
            <C.SocialItem>
              <C.SocialLink>
                <FaGithubAlt />
              </C.SocialLink>
            </C.SocialItem>
          </C.Social>
        </C.Profile>

        <C.About>
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
        </C.About>






      </C.Container>
    </>
  );
}

export default Home;
