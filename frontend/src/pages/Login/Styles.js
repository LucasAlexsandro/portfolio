import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .form-login {
    max-width: 500px;
    width: 100%;
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        padding: 1rem;
        border-radius: 5px;
        border: 2px solid var(--color-semidark);
        background: transparent;
        color: var(--color-text);
        outline: none;
      }

      input[type=submit ] {
        background-color: var(--color-primary);
        cursor: pointer;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;
