import React from "react";
import styled from "styled-components";

export const ButtonStyled = styled.div`
  font-weight: 600;
  fill: #ffffff;
  color: #ffffff;
  background-color: var(--color-primary);
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: #333333;
  box-shadow: 2px 2px 0px 0px var(--color-primary);
  padding: 1rem 3rem;
  display: inline-block;
`;

export default function Button({ text }) {
  return <ButtonStyled>{text}</ButtonStyled>;
}
