import React, { useState } from "react";
import * as C from "./Styles";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithubAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Logo from "../../assets/images/logo.png";

function Profile() {
  return (
    <C.Profile>
      <C.LogoContainer>
        <img src={Logo} alt="logo lucas" />
      </C.LogoContainer>
      <C.TextName>Lucas <small>Alexsandro</small></C.TextName>
      <C.TextDev>
            {"<"} <span>Code</span> {">"}
            <TypeAnimation
              sequence={[ "I am Web Developer",1000, "I am Freelancer",1000, "Eu sou Apaixonado por tecnologia ❤️",1000,]}
              speed={10}
              wrapper="p"
              repeat={Infinity}
            />
            {"</"}<span>Code</span>{">"}
          </C.TextDev>
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
            href="https://facebook.com/lucasalexsandr0"
          >
            <FaFacebookF />
          </C.SocialLink>
        </C.SocialItem>
        <C.SocialItem>
          <C.SocialLink
            target="_blank"
            href="https://github.com/LucasAlexsandro"
          >
            <FaGithubAlt />
          </C.SocialLink>{" "}
        </C.SocialItem>
      </C.Social>
    </C.Profile>
  );
}

export default Profile;
