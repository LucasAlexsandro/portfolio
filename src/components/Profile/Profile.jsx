import React, { useState } from "react";
import * as C from "./Styles";
// import { TypeAnimation } from "react-type-animation";
import { AiOutlineMenu } from "react-icons/ai";
import {
  FaGithubAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Logo from "../../assets/images/logo.png";

function Profile() {
  const [menu, setMenu] = useState(false);

  return (
    <C.Profile>
      <C.LogoContainer>
        <img src={Logo} alt="logo lucas" />
      </C.LogoContainer>
      <C.TextName>Lucas Alexsandro</C.TextName>
      {/* <C.TextDev>
            {"<"} <span>Code</span> {">"}
            <TypeAnimation
              sequence={[ "Eu sou Web Developer",1000, "Eu sou Freelancer",1000,]}
              speed={10}
              wrapper="p"
              repeat={Infinity}
            />
            {"</"}<span>Code</span>{">"}
          </C.TextDev> */}
      <C.Social>
        <C.SocialItem>
          <C.SocialLink
            target="_blank"
            href="https://linkedin.com/in/lucasalexsandro"
          >
            <FaLinkedinIn />
          </C.SocialLink>
        </C.SocialItem>
        <C.SocialItem>
          <C.SocialLink
            target="_blank"
            href="https://linkedin.com/in/lucasalexsandro"
          >
            <FaBehance />
          </C.SocialLink>
        </C.SocialItem>
        <C.SocialItem>
          <C.SocialLink
            target="_blank"
            href="https://linkedin.com/in/lucasalexsandro"
          >
            <FaFacebookF />
          </C.SocialLink>
        </C.SocialItem>
        <C.SocialItem>
          <C.SocialLink
            target="_blank"
            href="https://linkedin.com/in/lucasalexsandro"
          >
            <FaGithubAlt />
          </C.SocialLink>{" "}
        </C.SocialItem>
        <C.SocialItem>
          <C.SocialLink onClick={() => setMenu(true)}>
            <AiOutlineMenu />
          </C.SocialLink>
        </C.SocialItem>
      </C.Social>
      <C.NavBar open={menu}>
        <C.NavClose onClick={() => setMenu(false)}>
          <CgClose />
        </C.NavClose>
        <C.NavLink>Home</C.NavLink>
        <C.NavLink>Sobre</C.NavLink>
        <C.NavLink>Serviços</C.NavLink>
        <C.NavLink>Portfólio</C.NavLink>
        <C.NavLink>Contato</C.NavLink>
      </C.NavBar>
    </C.Profile>
  );
}

export default Profile;
