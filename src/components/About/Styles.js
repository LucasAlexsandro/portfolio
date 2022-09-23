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
  flex: 40%;
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
  padding: 1.4rem 3rem;
  margin-top: 2rem;
  border-radius: 15px;
  font-weight: 700;

`;

export const AboutRight = styled.div`
  flex: 57%;

  @media (max-width: 800px) {
    flex: 100%;
  }
`;

export const AboutTab = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--color-semidark);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TabLink = styled.a`
  font-size: 1rem;
  cursor: pointer;
`;

export const TabBody = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const SkillItem = styled.div`
  margin: 1.5rem;
  text-align: center;
  width: 200px;
  border: 1px solid red;
`;

export const SkillIco = styled.img`
  max-width: 60px;
  width: 100%;
`;

export const SkillText = styled.h3`
  margin-top: 1rem;
`;