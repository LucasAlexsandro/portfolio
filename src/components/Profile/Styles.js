import styled from 'styled-components';


export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  margin-top: 4rem;
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