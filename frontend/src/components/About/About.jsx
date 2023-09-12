import React from "react";
import * as A from "./Styles";
import { Container } from "../../pages/Home/Styles";

import Logo from "../../assets/images/logo.png";

export default function About() {
  return (
    <>
      <A.AboutContainer>
        <Container>
          <div className="about-grid">
            <div className="about-area-text">
              <h2>
                Lucas <span>Alexsandro</span>
              </h2>
              <p>
                My name is David Parker. I am a graphic designer, and I'm very
                passionate and dedicated to my work. With 20 years experience as
                a professional a graphic designer, I have acquired the skills
                and knowledge.
              </p>
              <button>Ver mais</button>
            </div>
            <div className="about-area-img">
              <div className="grid-item"><img src="https://lucasdeveloper.netlify.app/assets/img1.png" /></div>
              <div className="grid-item"><img src="https://lucasdeveloper.netlify.app/assets/img1.png" /></div>
              <div className="grid-item"><img src="https://lucasdeveloper.netlify.app/assets/img1.png" /></div>
            </div>
          </div>
        </Container>
      </A.AboutContainer>
    </>
  );
}
