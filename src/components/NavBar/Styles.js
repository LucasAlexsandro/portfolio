import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

export const NavExpansive = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-semidark);
  z-index: 99999;
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 300ms ease-in-out;
`;