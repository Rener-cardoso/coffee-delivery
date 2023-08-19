import styled from "styled-components";

export const HeaderOutCountainer = styled.div`
  background-color: ${({ theme }) => theme["background"]};
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const HeaderCountainer = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 70rem;
  padding: 2rem 0;
  margin: 0 auto;
`;

export const NavCountainer = styled.nav`
  display: flex;
  height: 2.375rem;
`;

export const MapPinCountainer = styled.div`
  background-color: ${({ theme }) => theme["purple-light"]};
  color: ${({ theme }) => theme["purple-dark"]};
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;
  margin-right: 0.75rem;
`;

export const ShoppingCartCountainer = styled.div`
  background-color: ${({ theme }) => theme["yellow-light"]};
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    position: absolute;
    background-color: ${({ theme }) => theme["yellow-dark"]};
    color: ${({ theme }) => theme.white};
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: 100%;
    margin-bottom: 100%;

    font-size: 0.75rem;
    font-weight: 700;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;