import styled from "styled-components";

export const SuccessCountainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 5rem;

  @media(max-width: 768px) {
    padding: 2rem 1rem 0;
  }
`;

export const HeaderCountainer = styled.header`
  margin-bottom: 2.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    color: ${({ theme }) => theme["yellow-dark"]};
  }

  span {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;

    color: ${({ theme }) => theme["base-subtitle"]};
  }

  @media(max-width: 768px) {
    text-align: center;
  }
`;

export const MainCountainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;

    img {
      margin-top: 3rem;
      width: 110%;
    }
  }
`;

export const AdressCountainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  width: 32rem;
  height: 16.8rem;
  background-color: ${({ theme }) => theme.background};

  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  @media(max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1rem;
  }
`;

const BaseIcon = styled.span`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
`;

export const FirstIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme["purple"]};
`;

export const SecondIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme["yellow"]};
`;

export const ThirdIcon = styled(BaseIcon)`
  background-color: ${({ theme }) => theme["yellow-dark"]};
`;

export const AdressTextBox = styled.div`
  display: flex;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    color: ${({ theme }) => theme["base-text"]};
  }

  strong {
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;

    color: ${({ theme }) => theme["base-text"]};
  }

  @media(max-width: 768px) {
    h2 {
      font-size: 90%;
    }

    strong {
      font-size: 90%;
    }
  }
`;