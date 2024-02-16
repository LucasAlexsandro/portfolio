import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  .container {
    .contact-title {
      margin-top: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h5 {
        background-color: var(--color-primary);
        padding: 0.6rem 1rem;
        border-radius: 50px;
        font-size: 1rem;
      }

      h1 {
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        font-size: 3rem;
        max-width: 800px;
      }
    }
    .row {
      .box-container-form {
        .contact-title {
          .subtitle {
            background-color: var(--color-primary);
            padding: 0.6rem 1rem;
            border-radius: 50px;
            font-size: 1rem;
          }

          h1 {
            color: white;
          }

          span {

          }
        }
        form {
          width: 100%;
          padding: 0.5rem;
          border-radius: 20px;
          input {
            border: none;
            border: 1px solid var(--color-primary);
            border-radius: 5px;
            background-color: transparent;
            outline: none;
            color: white;
          }
          textarea {
            background-color: transparent;
            border: none;
            border-radius: 5px;
            outline: none;
            border: 1px solid var(--color-primary);
            color: white;
          }
          input[type="submit"] {
            background-color: var(--color-primary);
            color: #fff;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            border-radius: 10px;
          }
        }
      }
    }
  }
`;
