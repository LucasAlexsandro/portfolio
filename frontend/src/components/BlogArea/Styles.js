import styled from 'styled-components';

export const BlogAreaContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .blog-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .grid-post {
      .grid-post__img {
        height: 300px;
        border-radius: 20px;
        img {
          max-width: 100%;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: cover;
        }
      }
      .grid-post__content {
        margin-top: 1rem;
        padding: 1rem;
        span {
          color: var(--color-primary);
        }
        .date-post {
          margin-left: 1rem;
          color: white;
        }
        h2 {
          margin-top: 1rem;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
