import styled from "styled-components";

export const CoffeeCartCountainer = styled.div`
  background-color: ${({ theme }) => theme["base-card"]};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  margin-bottom: 2.5rem;
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const CoffeeCartHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  span {
    background-color: ${({ theme }) => theme["yellow-light"]};
    color: ${({ theme }) => theme["yellow-dark"]};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    margin-top: 0.75rem;

    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.81rem;
    text-transform: uppercase;
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;

    color: ${({ theme }) => theme["base-subtitle"]};
    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.13rem;

    color: ${({ theme }) => theme["base-label"]};
    margin-top: 0.5rem;
    text-align: center;
  }
`;

export const TypeCoffeeCountainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const CoffeeCartFooter = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;

    color: ${({ theme }) => theme["base-text"]};
  }

  span:first-child {
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const CartBox = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ShoppingCartBox = styled.button`
  height: 2.375rem;
    width: 2.375rem;
    background-color: ${({ theme }) => theme["purple-dark"]};
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme["purple"]};
    }
`;

export const PlusMinusBox = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme["base-button"]};
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
    width: 4.5rem;
    height: 2.375rem;

    button {
      border: none;
      background: none;
      cursor: pointer;
    }

    button:first-child {
      margin-right: 0.25rem;
    }

    button:last-child {
      margin-left: 0.25rem;
    }
`;