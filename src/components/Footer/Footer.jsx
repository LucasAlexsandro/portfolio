import React from 'react'
import * as C from "./Styles";
import Logo from "../../assets/images/logo-lucas.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGithubAlt, FaFacebookF, FaLinkedinIn, FaBehance, } from "react-icons/fa";

function Footer() {
  return (
    <>
      <C.FooterContainer>
        <C.Logo src={Logo}></C.Logo>
        <C.Social>
              <C.SocialItem><C.SocialLink target="_blank" href="https://linkedin.com/in/lucasalexsandro"><FaLinkedinIn /></C.SocialLink></C.SocialItem>
              <C.SocialItem><C.SocialLink target="_blank" href="https://linkedin.com/in/lucasalexsandro"><FaBehance /></C.SocialLink></C.SocialItem>
              <C.SocialItem><C.SocialLink target="_blank" href="https://linkedin.com/in/lucasalexsandro"><FaFacebookF /></C.SocialLink></C.SocialItem>
              <C.SocialItem><C.SocialLink target="_blank" href="https://linkedin.com/in/lucasalexsandro"><FaGithubAlt /></C.SocialLink> </C.SocialItem>
          </C.Social>
        <C.Description>Lucas Alexsandro - Todos os Direitos Reservados</C.Description>
      </C.FooterContainer>
    </>
  )
}

export default Footer