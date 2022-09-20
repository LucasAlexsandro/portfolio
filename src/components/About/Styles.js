import styled from 'styled-components';

export const AboutContainer = styled.div`
  margin-top: 3rem;
  max-width: 600px;
  width: 100%;
  height: 250px;
  background-color: var(--color-semidark);
  border-radius: 2px;
`;

export const Tab = styled.div`
  width: 100%;
  height: 40px;
  background-color: #16213E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-radius: 2px;
`;

export const TabInfo = styled.h2`
  letter-spacing: 1px;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
`;

export const TabButton = styled.button`
  margin-left: 1rem;
  padding: 0.3rem;
  border-radius: 100%;
  border: none;
  background-color: ${ props => props.color};
`;

export const Text = styled.p`
  padding: 1rem;
  font-size: var(--normal-font-size);
`;