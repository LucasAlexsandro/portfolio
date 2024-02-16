import styled from "styled-components";

export const DashArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  .dash-container {
    flex: 1;
    display: flex;

    .sidebar-area {
      padding-top: 2rem;
      width: 300px;
      height: 100vh;
      border-right: 1px solid var(--color-gray-200);
      display: flex;
      flex-direction: column;

      .navigation {
        ul {
          li {
            .navigation-title {
              position: relative; /* Added relative positioning */
              display: flex;
              align-items: center;
              gap: 1rem;

              i {
                font-size: 24px;
                color: var(--color-gray-500);
                display: flex;
                align-items: center;
                justify-content: center;

                &::after {
                  content: "";
                  height: calc(100% - 4px); /* Adjust the percentage based on your design */
                  position: absolute;
                  top: 2rem;
                  background-color: var(--color-gray-200);
                  width: 1px;
                }
              }

              span {
                font-size: 18px;
                color: var(--color-gray-500);
              }
            }

            .navigation-item {
              .item-link {
                padding: 1rem;
                font-weight: 400;
                color: var(--color-gray-500);
                &::before {
                  content: "";
                  height: 100%; /* Adjust the percentage based on your design */
                  position: relative;
                  background-color: #000;
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }

    .main-area {
      flex: 1;
      height: 100vh;
      width: 100%;
    }
  }
`;

// ... rest of your code remains the same
