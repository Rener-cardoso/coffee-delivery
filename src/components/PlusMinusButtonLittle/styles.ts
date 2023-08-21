import styled from "styled-components";

export const PlusMinusBox = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme["base-button"]};
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
    width: 4.5rem;
    height: 2rem;

    @media(max-width: 768px) {
      font-size: 85%;
    }

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