import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import IlustrationSuccess from "../../assets/ilustrationIgniteCoffee.png"

import { AdressCountainer, AdressTextBox, FirstIcon, HeaderCountainer, MainCountainer, SecondIcon, SuccessCountainer, ThirdIcon } from "./styles";
import { useLocation } from "react-router-dom";
import { formProps } from "../Checkout";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";

interface LocationProps {
  state: formProps;
}

export function Success() {
  const { paymentOptions } = useCart();
  const [paymentForm, setPaymentForm] = useState([""]);

  const { state } = useLocation() as unknown as LocationProps;

  useEffect(() => {
    function addPaymentForm() {
      const addPayment = paymentOptions.filter(paymentOption => paymentOption.ischecked === "true")
      
      const onlyTitle = addPayment.map(data => {
        return data.title
      })

      setPaymentForm(onlyTitle)
    }
    addPaymentForm();
  }, [paymentOptions])

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
              <h2>Entrega em <strong>{state.rua}, {state.numero}</strong></h2>
              <h2>{state.bairro} - {state.cidade}, {state.uf}</h2>
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
              <strong>{paymentForm}</strong>
            </div>
          </AdressTextBox>
        </AdressCountainer>
        <img src={IlustrationSuccess} alt="" />
      </MainCountainer>
    </SuccessCountainer>
  )
}