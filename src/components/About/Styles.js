import styled from 'styled-components';

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  background: var(--color-dark);
  gap: 2rem;
`;

export const AboutLeft = styled.div`
  flex: 45%;
  font-family: "Nunito", sans-serif;

  @media (max-width: 800px) {
    flex: 100%;
  }
`;

export const SubTitle = styled.h3`
  font-weight: bold;
  color: var(--color-primary);
`;

export const Title = styled.h1`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 3rem;
`;

export const Content = styled.p`
  margin-top: 2rem;
  font-size: 1.2em;
  white-space: normal;
  line-height: 30px;
  text-align: justify;

  span {
    color: var(--color-primary);
  }
`;

export const Counter = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CountItem = styled.div`
  
`;

export const CountNumber = styled.h2`
  font-size: 3rem;
  color: var(--color-primary);
`;

export const CountInfo = styled.span`
  font-size: 1rem;
  margin-top: 1.5rem;
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--color-bg);
  padding: 1.2rem 3rem;
  margin-top: 2rem;
  border-radius: 2px;
`;

export const AboutRight = styled.div`
  flex: 52%;

  @media (max-width: 800px) {
    flex: 100%;
  }
`;

export const AboutTab = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--color-semidark);
  border-radius: 10px;
`;

