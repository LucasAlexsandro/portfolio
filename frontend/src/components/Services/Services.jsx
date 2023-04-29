import React from "react";
import * as S from "./Styles";
import { FcMultipleDevices } from "react-icons/fc";
import Cell from "../../assets/images/mobile-dynamic-gradient.png";
import WebDesign from "../../assets/images/website.png";
import Responsive from "../../assets/images/responsive-device.png";

function Services() {
  return (
    <S.ServicesArea>
      <div className="container">
        <S.ServicesContainer>
          <h5>Minhas Especialidades</h5>
          <h1 className="mt-3">Como posso ajudar a crescer o seu negócio!</h1>
          <div className="service-grid-cards">
            <div className="service-card">
              <div className="service-card-logo">
                <img src={Cell} />
              </div>
              <div className="service-content">
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-logo">
                <img src={Cell} />
              </div>
              <div className="service-content">
                <h3>Web Design</h3>
                <p>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-logo">
                <img src={Cell} />
              </div>
              <div className="service-content">
                <h3>Responsive</h3>
                <p>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-logo">
                <img src={Cell} />
              </div>
              <div className="service-content">
                <h3>QA</h3>
                <p>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum
                </p>
              </div>
            </div>
          </div>
        </S.ServicesContainer>
      </div>
    </S.ServicesArea>
  );
}

export default Services;
