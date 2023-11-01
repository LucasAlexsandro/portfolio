import styled from "styled-components";

export const ServicesArea = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1060px) {
    margin-bottom: 5rem;
  }
`;

export const ServicesContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h5 {
    background-color: var(--color-primary);
    padding: 0.6rem 1rem;
    border-radius: 50px;
    font-size: 1rem;
  }

  h1 {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    max-width: 800px;
    color: var(--color-primary);
  }

  .service-grid-cards {
    width: 100%;
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;

    .service-card {
      height: 400px;
      max-width: 350px;
      width: 100%;
      /* background: #e7e7e7; */
      border-radius: 20px;
      padding: 1rem;
      min-height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition-duration: 0.3s;
      transition-property: transform;
      transition-timing-function: ease-out;
      border: 3px solid var(--color-primary);

      &:hover {
        transform: rotate(-3deg);
        border: 2px solid var(--color-primary);
      }

      .service-card-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        min-width: 150px;
        min-height: 150px;
        
        border-radius: 100%;

        img {
          animation: rotate 3s linear infinite;
          max-width: 60%;
          width: 100%;

          @keyframes rotate {
            0% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(10px);
            }
            60% {
              transform: translateY(0px);
            }
            80% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        }
      }
    }
    .service-content {
      padding-left: 1.4rem;
      text-align: left;
      h3 {
        color: var(--color-primary);
      }
      p {
        color: #000;
      }
    }
  }
`;
