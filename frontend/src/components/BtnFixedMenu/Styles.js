import styled from "styled-components";

export const MenuFixedContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .btnFixed {
    background-color: transparent;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    border-radius: 100%;
    width: 70px;
    height: 70px;
    font-size: 0.7rem;

    span {
      margin-right: 5px;
      font-size: 1rem;
    }
  }
`;

export const MenuOpen = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  .NavBarMenuFixed {
    ul {
      li {
        padding-bottom: 1rem;
        a {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
