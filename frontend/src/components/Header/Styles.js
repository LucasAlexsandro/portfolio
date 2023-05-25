import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 0 2rem;

      a {
        color: #fff;
      }
    }
  }

  img {
    max-width: 90px;
  }
`;
