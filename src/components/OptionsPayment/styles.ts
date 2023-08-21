import styled from "styled-components";

interface OptionPaymentCountainerProps {
  ischecked: boolean;
}

export const OptionPaymentCountainer = styled.div<OptionPaymentCountainerProps>`
  background-color: ${(props) => props.ischecked ? "#EBE5F9" : "#E6E5E5"};
  color: ${({ theme }) => theme["base-text"]};
  border: 1px solid ${(props) => props.ischecked ? "#8047F8" : "#F3F2F2"};
  border-radius: 6px;
  width: 100%;
  height: 3.125rem;
  padding-left: 1rem;
  
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme["base-hover"]};
  }


  @media(max-width: 768px) {
    font-size: 50%;
    padding: 0.5rem;
    flex-direction: column;
    gap: 0;
  }
`;