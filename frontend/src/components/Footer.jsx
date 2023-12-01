import React from "react";
import styled from "styled-components";

import { Container } from "../pages/Home/Styles";
import { Link } from "react-router-dom";
import { LuHandMetal } from "react-icons/lu";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter, AiFillInstagram, AiFillFacebook, AiFillGithub } from "react-icons/ai";

export const FooterContainer = styled.div`
  margin-top: 10rem;
  height: 70vh;
  width: 100%;
  background: var(--color-primary);

  .area-contact-link {
    position: relative;
    height: 200px;
    width: 100%;
    bottom: 100px;
    background: var(--color-semidark);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    button {
      color: #ffffff;
      padding: 1.25em 2em;
      font-weight: 400;
      border-radius: 50px;
      background: transparent;
      border: 3px solid var(--color-verde);
      box-shadow: 4px 4px 0px 0px var(--color-verde);
      transition: 0.2s linear;
      &:hover {
        background: var(--color-verde);
        box-shadow: 0px 0px 0px 0px var(--color-primary);
      }
      i {
        margin-right: 1rem;
        font-size: 1.4rem;
      }
    }
  }

  .footer-social {
    text-align: center;
    div {
      justify-content: center;
      display: flex;
      gap: 10px;
      margin-top: 50px;
      button {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background: transparent;
        border: 1px solid #fff;
        i {
          font-size: 1.4rem;
          color: white;
        }
      }
    }
  }
  .footer-end {
    text-align: center;
    margin-top: 50px;
    padding: 1rem;
    color: black;
    width: 100%;
    a {
      color: var(--color-primary);
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <div className="area-contact-link">
          <h1> Vamos conversar ? </h1>
          <Link to="/contact">
            <button>
              <i><LuHandMetal /></i>
              Vamos fazer isso
            </button>
          </Link>
        </div>
        <div className="footer-social">
          <h3>
            Dedique o seu tempo e o seu amor <br></br> ao que te faz feliz!
          </h3>
          <div>
            <button>
              <i>
                <GrLinkedinOption />
              </i>
            </button>
            <button>
              <i>
                <AiOutlineTwitter />
              </i>
            </button>
            <button>
              <i>
                <AiFillInstagram />
              </i>
            </button>
            <button>
              <i>
                <AiFillFacebook />
              </i>
            </button>
            <button>
              <i>
                <AiFillGithub />
              </i>
            </button>
          </div>
        </div>
        <div className="footer-end">
          <span>Feito com ❤️ por <a href="#">Lucas Alexsandro</a></span>
        </div>
      </Container>
    </FooterContainer>
  );
}
