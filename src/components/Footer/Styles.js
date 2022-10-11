import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background: var(--color-dark);
`;

export const Logo = styled.img`
  max-width: 50px;
  width: 100%;
  margin-bottom: .7rem;
`;

export const Social = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;

export const SocialItem = styled.li`
  margin: 1rem;

  @media (max-width: 500px){
    margin: 0.5rem;
  }

  @media (max-width: 350px){
    margin: 0.2rem;
  }
`;

export const SocialLink = styled.a`
  font-size: 1rem;
  cursor: pointer;
  transition: 0.6s ease-in;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  text-decoration: none;
  color: var(--color-bg);

  &:hover {
    transform: rotate(360deg);
    background-color: var(--color-primary);
  }
`;

export const Description = styled.a`
  margin-top: 2rem;
`;
