import styled from "styled-components";

export const CheckoutCountainer = styled.form`
  max-width: 70rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 57% 1fr;
  /* gap: 2rem; */
  /* border: 1px solid ${({ theme }) => theme["error-message"]}; */
  
  @media(max-width: 768px) {

    grid-template-columns: 1fr;
    padding-bottom: 1rem;
  }
`;

export const PaymentCountainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;

  @media(max-width: 768px) { 
      
      /* border: 1px solid ${({ theme }) => theme["error-message"]}; */
    }
`;

export const TextTitle = styled.h2`
  margin-bottom: 0.93rem;

  font-family: Baloo 2;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;

  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const MainCountainer = styled.div`
    min-height: 23.25rem;
    background-color: ${({ theme }) => theme["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
    margin-bottom: 0.75rem;

    @media(max-width: 768px) {
      padding: 1.5rem;
      /* border: 1px solid ${({ theme }) => theme["error-message"]}; */
    }
`;

export const TextBox = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  @media(max-width: 768px) {
    /* border: 1px solid ${({ theme }) => theme["error-message"]}; */
  }

  h2 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${({ theme }) => theme["base-subtitle"]};

      @media(max-width: 768px) {
        font-size: 80%;
      }
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;

      color: ${({ theme }) => theme["base-text"]};

      @media(max-width: 768px) {
        font-size: 75%;
      }
    }
`;

export const SidebarCountainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid ${({ theme }) => theme["error-message"]}; */
  padding: 0 1rem;  

  h2 {
    margin-bottom: 0.93rem;
  }

  @media(max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme["base-card"]};
  height: 31.12rem;
  border-radius: 6px 44px;
  padding: 2.3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid ${({ theme }) => theme["error-message"]}; */

  @media(max-width: 768px) {
    padding: 2rem 1rem 2rem;
  }
`;

export const PaymentCardCoffeeCountainer = styled.div`
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
}
`;

export const InputCountainer = styled.div``;

export const Cep = styled.div`
  width: 36%;
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

export const FooterCountainer = styled.footer`
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
  width: 100%;
  min-height: 12.9rem;
  padding: 2.5rem;

  @media(max-width: 768px) {
      padding: 1.5rem;
      /* border: 1px solid ${({ theme }) => theme["error-message"]}; */
    }
`;

export const PaymentBox = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 0.5rem;

  @media(max-width: 768px) {
    /* border: 1px solid ${({ theme }) => theme["error-message"]}; */
  }

  h2 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${({ theme }) => theme["base-subtitle"]};

      @media(max-width: 768px) {
      font-size: 80%;
    }
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;

      color: ${({ theme }) => theme["base-text"]};

      @media(max-width: 768px) {
        font-size: 75%;
      }
    }
`;

export const PaymentBoxForm = styled.div`
  display: flex;
  gap: 0.75rem;

  @media(max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    /* border: 1px solid ${({ theme }) => theme["error-message"]}; */
  }
`;

const FormPaymentBase = styled.button`
  background-color: ${({ theme }) => theme["base-button"]};
  padding: 1rem;
  border: none;
  border-radius: 6px;
  width: 100%;
  
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
`;

export const CreditBox = styled(FormPaymentBase)``;
export const DebitBox = styled(FormPaymentBase)``;
export const CashBox = styled(FormPaymentBase)``;

export const ConfirmCountainer = styled.div``;

export const ConfirmTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme["base-text"]};

    font-weight: 400;
    line-height: 130%;

    span {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1rem;
    }

    @media(max-width: 768px) {
      span {
        font-size: 85%;
      }

      strong {
        font-size: 85%;
      }
    }
  }
`;

export const TotalConfirm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;

  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;

  color: ${({ theme }) => theme["base-subtitle"]};
  
  @media(max-width: 768px) {
    font-size: ;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 2.875rem;
  border: none;
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  border-radius: 6px;
  padding: 12px 8px;
  margin-top: 1.5rem;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme["yellow-dark"]};
  }
`;