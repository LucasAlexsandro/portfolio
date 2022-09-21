import React, { useState } from "react";
import * as C from "./Styles";
import { Link } from "react-router-dom";
import { Container } from "../../pages/Home/Styles";
import { TypeAnimation } from "react-type-animation";
import Logo from "../../assets/images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGithubAlt, FaFacebookF, FaLinkedinIn, FaBehance, } from "react-icons/fa";


function Profile() {
  return (
    <>
      <Container>
        <C.Profile>
          <C.LogoContainer>
            <img src={Logo} alt="logo lucas" />
          </C.LogoContainer>
          <C.TextName>Lucas Alexsandro</C.TextName>
          <C.TextDev>
            {"<"} <span>Code</span> {">"}
            <TypeAnimation
              sequence={[ 
                "Eu sou Web Developer",1000,
                "Eu sou Freelancer",1000,]}
              speed={10}
              style={{ fontSize: "1.4rem" }}
              wrapper="p"
              repeat={Infinity}
            />
            {"</"}<span>Code</span>{">"}
          </C.TextDev>
          <C.Social>
            <C.SocialItem><C.SocialLink target="_blank" href="https://linkedin.com/in/lucasalexsandro"><FaLinkedinIn /></C.SocialLink></C.SocialItem>
            <C.SocialItem><C.SocialLink target="_blank" href="https://linkedin.com/in/lucasalexsandro"><FaBehance /></C.SocialLink></C.SocialItem>
            <C.SocialItem><C.SocialLink target="_blank" href="https://linkedin.com/in/lucasalexsandro"><FaFacebookF /></C.SocialLink></C.SocialItem>
            <C.SocialItem><C.SocialLink target="_blank" href="https://linkedin.com/in/lucasalexsandro"><FaGithubAlt /></C.SocialLink> </C.SocialItem>
            <C.SocialItem><C.SocialLink target="_blank" href="https://linkedin.com/in/lucasalexsandro"><AiOutlineMenu /></C.SocialLink></C.SocialItem>
          </C.Social>
        </C.Profile>
      </Container>
    </>
  );
}

export default Profile;
