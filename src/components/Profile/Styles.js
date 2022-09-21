import styled from "styled-components";
import { Link } from "react-router-dom";

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  width: 200px;
  background: linear-gradient(90deg, #9572fc, #43e7ad, #e2d45c, #9572fc);
  border-radius: 50%;
  padding: 4px;
  transition: transform .3s;
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
  font-size: 4rem;
  z-index: 99;
  color: var(--color-primary);

  @media only screen  and (max-width: 400px) {
    font-size: 2.5rem;
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
`;

export const Social = styled.ul`
  margin-top: 2rem;
  display: flex;
`;

export const SocialItem = styled.li`
  margin: 1rem;
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
