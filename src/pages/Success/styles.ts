import styled from "styled-components";

export const SuccessCountainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 5rem;
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
`;

export const MainCountainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;