import React from "react";
import styled from "styled-components";

export const ExpItemContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  .exp-item-ico {
    position: relative;

    img {
      object-fit: cover;
      width: 70px;
      height: 70px;
      border-radius: 10px;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 10px;
      left: 50%;
      width: 1px;
      height: calc(100% - 100px); /* Alterado para altura dinâmica */
      background: var(--color-text);
      border-radius: 20px;
    }
  }

  .exp-item-content {
    flex: 1; /* Para ocupar o espaço restante na linha */
    h2 {
      font-size: 20px;
      
    }
    h3 {
      font-size: 16px;
    }
    h5 {
      font-size: 12px;
    }
    p {
      margin-top: 2rem;
      text-align: justify;
    }
  }
`;

export default function ExpItem({ icon, empresa, cargo, data, descricao }) {
  return (
    <ExpItemContainer>
      <div className="exp-item-ico">
        <img src={icon} alt={`Logo ${empresa}`} />
      </div>
      <div className="exp-item-content">
        <h2>{empresa}</h2>
        <h3>{cargo}</h3>
        <h5>{data}</h5>
        <p>{descricao}</p>
      </div>
    </ExpItemContainer>
  );
}
