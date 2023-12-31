import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import { PaymentCardCoffee } from "../../components/PaymentCardCoffee";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { OptionsPayment } from "../../components/OptionsPayment";
import { FormProvider, useForm } from "react-hook-form";
import { InputCountainer } from "../../components/InputCountainer";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  CheckoutCountainer, 
  ConfirmButton, 
  ConfirmCountainer, 
  ConfirmTitle, 
  FooterCountainer, 
  MainCountainer, 
  PaymentBox, 
  PaymentBoxForm, 
  PaymentCardCoffeeCountainer, 
  PaymentCountainer, 
  Sidebar, 
  SidebarCountainer, 
  TextBox, 
  TextTitle, 
  TotalConfirm 
} from "./styles";

export interface formProps {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

const paymentFormValidationSchema = zod.object({
  cep: zod.string().nonempty("* Informe o seu CEP"),
  rua: zod.string().nonempty("* Informe a sua rua"),
  numero: zod.string().nonempty("* Informe o número do local"),
  bairro: zod.string().nonempty("* Informe o seu bairro"),
  cidade: zod.string().nonempty("* Informe a sua cidade"),
  uf: zod.string().nonempty("* Informe UF"),
  complemento: zod.string()
})

export type paymentFormProps = zod.infer<typeof paymentFormValidationSchema>

export function Checkout() {
  const { cartItems, paymentOptions } = useCart();
  const [ItemsTotal, setItemsTotal] = useState(0);

  const navigate = useNavigate();
  
  useEffect(() => {
    function sumPriceProducts() {
      const totalItems = cartItems.map(cartItem => {
        return Number(cartItem.price) * cartItem.quantity
      })

      let sum = 0

      for(let i=0;i < totalItems.length; i++) {
        sum+=totalItems[i]
      }
      setItemsTotal(sum)
    }
    sumPriceProducts();
  }, [cartItems])

  const totalProducts = ItemsTotal.toFixed(2)
  const frete = 3.2
  const totalOrdered = (Number(totalProducts) + frete).toFixed(2)

  const paymentForm = useForm<paymentFormProps>({
    resolver: zodResolver(paymentFormValidationSchema),
  });

  const onSubmit = (data: paymentFormProps) => {
    /*Informações prontas para serem enviadas para o backend!!!*/
    console.log(data)
    navigate("/success", { state: data });
  }

  const { handleSubmit } = paymentForm;

  return (
    <CheckoutCountainer>
      <PaymentCountainer>
        <TextTitle>Complete seu pedido</TextTitle>
        <MainCountainer>
          <TextBox>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <h2>Endereço de entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </TextBox>
          <FormProvider {...paymentForm}>
            <InputCountainer />
          </FormProvider>
        </MainCountainer>
        <FooterCountainer>
          <PaymentBox>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <h2>Pagamento</h2>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </PaymentBox>
          <PaymentBoxForm>
            {
              paymentOptions.map(paymentOption => {
                return (
                  <OptionsPayment
                    id={paymentOption.id}
                    key={paymentOption.id} 
                    title={paymentOption.title} 
                    icon={paymentOption.icon}  
                    ischecked={paymentOption.ischecked}
                   />
                )
              })
            }
          </PaymentBoxForm>
        </FooterCountainer>
      </PaymentCountainer>
      <SidebarCountainer>
        <TextTitle>Cafés selecionados</TextTitle>
        <Sidebar>
          <PaymentCardCoffeeCountainer>
            {
              cartItems.map(cartItem => {
                const sumOrderedCoffee = (Number(cartItem.price) * Number(cartItem.quantity)).toFixed(2)

                return (
                  <PaymentCardCoffee
                    key={cartItem.name} 
                    name={cartItem.name} 
                    price={cartItem.price} 
                    quantity={cartItem.quantity} 
                    image={cartItem.image}
                    sumOrderedCoffee={sumOrderedCoffee}
                  />
                )})  
            }
          </PaymentCardCoffeeCountainer>
          <ConfirmCountainer>
            <ConfirmTitle>
              <div>
                <span>Total de itens</span>
                <strong>R$ {totalProducts}</strong>
              </div>
              <div>
                <span>Entrega</span>
                <strong>R$ 3,20</strong>
              </div>
            </ConfirmTitle>
              <TotalConfirm>
                <span>Total</span>
                <strong>R$ {totalOrdered}</strong>
              </TotalConfirm>
            <ConfirmButton type="submit" onClick={handleSubmit(onSubmit)}>
              Confirmar Pedido
            </ConfirmButton>
          </ConfirmCountainer>
        </Sidebar>
      </SidebarCountainer>
    </CheckoutCountainer>
  )
} 