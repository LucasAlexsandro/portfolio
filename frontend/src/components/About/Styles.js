import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    .about-area-text {
      h2 {
        text-transform: uppercase;
        border-bottom: 1px dashed #dfdfdf;
        max-width: 400px;
        padding-bottom: 1rem;
        span {
          color: var(--color-primary);
        }
      }
      p {
        padding-top: 1rem;
        padding-right: 1rem;
        text-align: justify;
      }
      button {
        padding: 0.5rem 1.3rem;
        background-color: transparent;
        color: var(--color-primary);
        border: 1px solid var(--color-primary);
        &:hover {
          background: var(--color-primary);
          color: white;
        }
      }
    }
    .about-area-img {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(6, 1fr);
      gap: 2rem;
      justify-content: center;
      align-items: center;
      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: 6fr;
      }
      div {
        height: 300px;
        border-radius: 20px;
        img {
          max-width: 100%;
          object-fit: cover;
          overflow-clip-margin: content-box;
          overflow: clip;
        }
        :nth-child(1) {
          grid-area: 1 / 1 / 7 / 3;
        }
        :nth-child(2) {
          grid-area: 1 / 3 / 4 / 5;
        }
        :nth-child(3) {
          grid-area: 4 / 3 / 7 / 5;
          @media (max-width: 900px) {
            display: none;
          }
        }
      }
    }
  }
`;
