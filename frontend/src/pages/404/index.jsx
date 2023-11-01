import React from 'react'
import ReactDOM from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';

export const PageErroArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 10rem;
    color: var(--color-primary);
  }
  button {
    margin-top: 2rem;
    border: none;
    background: transparent;
    color: #fff;
    text-decoration: underline ;
  }
`;

export default function PageError() {

  const navigate = useNavigate();
  const routeParams = useParams();


  return (
    <PageErroArea>
      <h1>404</h1>
      <div>A página não existe (<code>{routeParams.PageError}</code>) </div>
      <button>Back to home</button>
    </PageErroArea>
  )
}
