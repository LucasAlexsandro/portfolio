import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  margin-top: 3rem;
  width: 150px;
  height: 150px;

  img {
    max-width: 100%;
    border-radius: 100%;
  }
`;

export const TextName = styled.h1`
  margin-top: 1rem;
  font-weight: bold;
  font-size: var(--h1-font-size);
`;

export const TextDev = styled.span`
  margin-top: 0.5rem;
  font-weight: bold;
`;

export const Social = styled.ul`
  display: flex;
`;

export const SocialItem = styled.li`
  margin: 1rem;
`;

export const SocialLink = styled.a`
  font-size: 1.4rem;
  cursor: pointer;
`;

export const About = styled.div`
  margin-top: 3rem;
  max-width: 600px;
  width: 100%;
  height: 250px;
  background-color: var(--color-semidark);
  border-radius: 2px;
`;

export const Tab = styled.div`
  width: 100%;
  height: 40px;
  background-color: #16213E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-radius: 2px;
`;

export const TabInfo = styled.h2`
  letter-spacing: 1px;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
`;

export const TabButton = styled.button`
  margin-left: 1rem;
  padding: 0.3rem;
  border-radius: 100%;
  border: none;
  background-color: ${ props => props.color};
`;

export const Text = styled.p`
  padding: 1rem;
  font-size: var(--normal-font-size);
`;
