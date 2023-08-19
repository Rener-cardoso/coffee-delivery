import styled from "styled-components";

import headerImage from "../../assets/coffee-gradient.png"

export const CoffeeTheme = styled.div`
  width: 100%;
  background: ${() => `url(${headerImage})`} no-repeat center;
  background-size: cover;
  z-index: -1;
  height: 60vh;
`;

export const HomeCountainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`;

export const HeaderCountainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 5.875rem;
`;

export const TextCountainer = styled.div`
  max-width: 36.75rem;
`;

export const HeaderTextCountainer = styled.div`

  h1 {
    color: ${({ theme }) => theme["base-title"]};
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 3.9rem;
    margin-bottom: 1rem;
  }

  span {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`;

export const FooterTextCountainer = styled.div`
  margin-top: 4.46rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    color: ${({ theme }) => theme["base-text"]};
    display: flex;
    align-items: center;
    font-weight: 400;
  }}
`;

const BaseIcon = styled.span`
  padding: 0.5rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
`;

export const FirstIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme["yellow-dark"]};
  
`;

export const SecondIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme["yellow"]};
`;

export const ThirdIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme["base-text"]};
`;

export const ForthIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme["purple"]};
`;

export const MainCountainer = styled.main`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;
    
    margin: 9.1rem 0 3.375rem;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const CoffeeCountainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.9rem;
`;