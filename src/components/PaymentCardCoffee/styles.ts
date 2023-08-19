import styled from "styled-components";

export const PaymentCardCoffeeCountainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};



  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    color: ${({ theme }) => theme["base-subtitle"]};
  }

  strong {
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;

    color: ${({ theme }) => theme["base-text"]};
  }
`;

export const PaymentCardCoffeeMain = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const TextCardCoffee = styled.div`
display: flex;
justify-content: space-between;
`;

export const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme["base-button"]};
  border: none;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 6px;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background-color: ${({ theme }) => theme["base-hover"]};
  }
  `;

export const ButtonCountainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;