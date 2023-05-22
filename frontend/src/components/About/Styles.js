import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  .about-area-text {
    flex: 40%;
    .about-area-description {
      display: flex;
      p {
        font-size: 1.3rem;
        text-align: justify;
        margin-left: 2rem;
      }
    }
  }

  .about-area-tabs {
    flex: 50%;
    .tab-header {
      display: flex;
      justify-content: space-between;

      .tab-header-item {
        text-align: center;
        padding: 1rem;
        width: 100%;
        background-color: var(--color-primary);
        cursor: pointer;
      }
    }
  }
`;
