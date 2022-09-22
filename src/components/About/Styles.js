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
  flex: 1;
  font-family: "Nunito", sans-serif;
`;

export const SubTitle = styled.h3`
  width: 150px;
  font-weight: bold;
  border-radius: 5px;
`;

export const Title = styled.h1`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 4em;
`;

export const Content = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
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
  background-color: var(--color-yellow);
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--color-bg);
  padding: 1.2rem 3rem;
  margin-top: 2rem;
  border-radius: 2px;
`;

export const AboutRight = styled.div`
  flex: 1 500px;
  border: 1px solid red;
`;

