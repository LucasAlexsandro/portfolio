import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    .row {
      .col-6 {
        form {
          input {
            border: 1px solid var(--color-semidark);
            background-color: transparent;
            border-radius: 5px;
            color: #fff;
          }
          input[type="submit"] {
            background-color: var(--color-primary);
            color: #fff;
          }
          textarea {
            border: 1px solid var(--color-semidark);
            background-color: transparent;
            border-radius: 5px;
          }

          .active-alert {
            display: ${props => props.active}
          }
        }
      }
    }
  }
`;
