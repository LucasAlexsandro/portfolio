import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  .container {
    .row {
      .col-7 {
        form {
          input {
            border: 2px solid var(--color-semidark);
            background-color: transparent;
            border-radius: 5px;
            color: #fff;
          }
          input[type="submit"] {
            background-color: var(--color-primary);
            color: #fff;
            font-weight: bold;
          }
          textarea {
            border: 2px solid var(--color-semidark);
            background-color: transparent;
            border-radius: 5px;
          }
        }
      }
    }
  }
`;
