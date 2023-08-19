import styled from "styled-components";

export const InputCountainerBox = styled.div``;

export const Cep = styled.div`
  width: 12.5rem;
`;

export const HouseInformation = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr;
  gap: 0.75rem;
`;

export const Localization = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 1fr;
  gap: 0.75rem;
`;

export const InputCountainerElement = styled.div`
  background-color: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 4px;
  padding: 0.75rem;
  height: 2.625rem;
  width: 100%;

  display: flex;
  margin-bottom: 1rem;
`;

export const InputBox = styled.input`
  background: none;
  border: none;
  color: ${({ theme }) => theme["base-text"]};

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme["base-label"]};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }
`;

export const OpcionalInputTrue = styled.h2`
  font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme["base-label"]};
`;