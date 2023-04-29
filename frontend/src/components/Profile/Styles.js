import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const LogoContainer = styled.div`
  width: 250px;
  background: linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f);
  border-radius: 50%;
  padding: 4px;
  transition: transform 0.3s;
  animation: RGB 1.5s ease infinite;
  background-size: 50% 10px;
  animation-timing-function: linear;

  img {
    max-width: 100%;
    border-radius: 100%;
  }

  @keyframes RGB {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 0%;
    }
  }

  &hover {
  }
`;

export const TextName = styled.h1`
  margin-top: 1.6rem;
  font-weight: bold;
  font-size: 6rem;
  color: var(--color-primary);

  small {
    color: transparent;
    -webkit-text-stroke: 1px #d0d6f5;
    text-stroke: 1px #d0d6f5;
  }

  @media (max-width: 560px) {
    font-size: 2.3rem;
  }

  @media (max-width: 330px) {
    font-size: 1.7rem;
  }
`;

export const TextDev = styled.span`
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: var(--h2-font-size);
  display: flex;

  span {
    color: var(--color-primary);
  }

  p {
    margin-left: 0.8rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const Social = styled.ul`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  padding: 0;
`;

export const SocialItem = styled.li`
  margin: 1rem;

  @media (max-width: 500px) {
    margin: 0.5rem;
  }

  @media (max-width: 350px) {
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
  background-color: var(--color-semidark);
  text-decoration: none;
  color: var(--color-bg);

  &:hover {
    transform: rotate(360deg);
    background-color: var(--color-primary);
  }
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-semidark);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 30%;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  padding: 2rem 1rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: var(--color-bg);
  text-decoration: none;
  transition: color 0.3s linear;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: var(--color-bg);
    background-color: var(--color-primary);
    text-align: center;
  }
`;

export const NavClose = styled.button`
  background: none;
  padding: 1rem;
  border: none;
  font-size: 2rem;
  color: var(--color-bg);
  cursor: pointer;
`;
