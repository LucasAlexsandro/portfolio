import styled from "styled-components";

export const BioArea = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

    .bio-items {
        margin-top: 4rem;
        font-size: 2rem;
        h3 {
            padding: 1rem;
            border-radius: 10px;
            background-color: var(--color-primary);
            text-align: center;
        }
        .grid-items {
            margin-top: 4rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            .grid-item {
                padding: 1rem;
                background-color: red;
                border-radius: 10px;
                max-width: 300px;
                width: 100%;
            }
        }
    }
`;