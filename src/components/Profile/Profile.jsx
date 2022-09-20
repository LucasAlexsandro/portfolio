import React from "react";
import Logo from "../../assets/images/logo.png";
import * as C from "./Styles";
import {
  FaGithubAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

function Profile() {
  return (
    <>
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
    </>
  );
}

export default Profile;
