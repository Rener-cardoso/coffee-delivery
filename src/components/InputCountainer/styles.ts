import styled from "styled-components";

export const InputCountainerBox = styled.div``;

export const Cep = styled.div`
  width: 36%;
`;

export const HouseInformation = styled.div`
  display: grid;
  grid-template-columns: 36% 1fr;
  gap: 0.75rem;
`;

export const Localization = styled.div`
  display: grid;
  grid-template-columns: 36% 40% 1fr;
  gap: 0.75rem;
  
  @media(max-width: 768px) {
    grid-template-columns: 36% 36% 1fr;
  }
`;

export const InputCountainerElement = styled.div`
  background-color: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 4px;
  padding: 0.75rem;
  height: 2.625rem;
  width: 100%;

  display: flex;
  margin-top: 1rem;
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

  @media(max-width: 768px) {
    font-size: 80%;
  }
`;

export const OpcionalInputTrue = styled.h2`
  font-size: 0.75rem;
  font-style: italic;
  font-weight: 400;
  line-height: 130%;
  color: ${({ theme }) => theme["base-label"]};

  @media(max-width: 768px) {
    display: none;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme["error-message"]};
  font-size: 0.7rem;
  
  @media(max-width: 768px) {
    font-size: 0.5rem;
  }
`;