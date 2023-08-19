import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import IlustrationSuccess from "../../assets/ilustrationIgniteCoffee.png"

import { AdressCountainer, AdressTextBox, FirstIcon, HeaderCountainer, MainCountainer, SecondIcon, SuccessCountainer, ThirdIcon } from "./styles";

export function Success() {
  return (
    <SuccessCountainer>
      <HeaderCountainer>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </HeaderCountainer>
      <MainCountainer>
        <AdressCountainer>
          <AdressTextBox>
            <FirstIcon>
              <MapPin size={16} color="white" weight="fill" />
            </FirstIcon>
            <div>
              <h2>Entrega em <strong>Rua Daniel Martinelli, 102</strong></h2>
              <h2>Farrapos - Porto Alegre, RS</h2>
            </div>
          </AdressTextBox>
          <AdressTextBox>
            <SecondIcon>
              <Timer size={16} color="white" weight="fill" />
            </SecondIcon>
            <div>
              <h2>Previsão de entrega</h2>
              <strong>20 min - 30 min</strong>
            </div>
          </AdressTextBox>
          <AdressTextBox>
            <ThirdIcon>
              <CurrencyDollar size={16} color="white" />
            </ThirdIcon>
            <div>
              <h2>Pagamento na entrega</h2>
              <strong>Cartão de Crédito</strong>
            </div>
          </AdressTextBox>
        </AdressCountainer>
        <img src={IlustrationSuccess} alt="" />
      </MainCountainer>
    </SuccessCountainer>
  )
}