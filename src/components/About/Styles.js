import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutContent = styled.div`
  width: 50%;
`;

export const TitleAbout = styled.h1`
  
`;

export const TabContainer = styled.div`
  width: 50%;
  background-color: var(--color-semidark);
  border-radius: 10px;
`;

export const Tab = styled.div`
  width: 100%;
  height: 40px;
  background-color: #16213E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-radius: 10px;
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