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
  width: 210px;
  background: linear-gradient(90deg, #9572fc, #54e0c4, #e2d45c, #9572fc);
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
  font-size: 4rem;
  color: var(--color-primary);

  @media only screen and (max-width: 500px) {
    font-size: 2rem;
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

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-semidark);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 30%;
  text-align: left;
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
      background-color: var(--color-verde);
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
