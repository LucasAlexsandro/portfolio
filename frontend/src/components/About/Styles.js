import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;

  .about-area {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    .about-content-text {
      h3 {
        color: var(--color-primary) ;
        text-transform: uppercase;
      }
      h1 {
        font-weight: 700;
        color: var(--color-semidark) ;
        font-size: 2.6rem;
        text-transform: uppercase;
      }
      p {
        color: var(--color-semidark) ;
        margin-top: 3rem;
        position: relative;
        padding-left: 110px;
        text-align: justify;
        &::before {
          content: "";
          position: absolute;
          top: 18%;
          left: -10px; /* Ajuste conforme necessário */
          width: 100px; /* Ajuste conforme necessário */
          height: 3px;
          background: var(--color-verde);
          transform: translateY(-50%);
        }
      }
    }
  }

`;
