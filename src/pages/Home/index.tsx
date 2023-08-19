import logoCafeteria from "../../assets/cafeteria-logo.png"
import { ShoppingCartSimple, Timer, Package, Coffee } from "@phosphor-icons/react"

import { CoffeeCountainer, CoffeeTheme, FirstIcon, FooterTextCountainer, ForthIcon, HeaderCountainer, HeaderTextCountainer, HomeCountainer, MainCountainer, SecondIcon, TextCountainer, ThirdIcon } from "./styles"
import { CoffeeCard } from "../../components/CoffeeCard"
import { useCart } from "../../hooks/useCart"

export function Home() {
  const { Coffees } = useCart()
  
  return (
    <CoffeeTheme>
    <HomeCountainer>
      <HeaderCountainer>
        <TextCountainer>
          <HeaderTextCountainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </HeaderTextCountainer>
          <FooterTextCountainer>
            <div>
                <h3><FirstIcon><ShoppingCartSimple color="white" size={16} weight="fill" /></FirstIcon>Compra simples e segura</h3>
                <h3><SecondIcon><Timer color="white" size={16} weight="fill" /></SecondIcon>Entrega rápida e rastreada</h3>
            </div>
            <div>
                <h3><ThirdIcon><Package color="white" size={16} weight="fill" /></ThirdIcon>Embalagem mantém o café intacto</h3>
                <h3><ForthIcon><Coffee color="white" size={16} weight="fill" /></ForthIcon>O café chega fresquinho até você</h3>
            </div>
          </FooterTextCountainer>
        </TextCountainer>
        <div>
          <img src={logoCafeteria} alt="" />
        </div>
      </HeaderCountainer>
      <MainCountainer>
        <h1>Nossos cafés</h1>
        <CoffeeCountainer>
          {
            Coffees.map(coffee => {
              return (
                <CoffeeCard
                  key={coffee.name}
                  typeCoffee={coffee.typeCoffee}
                  name={coffee.name} 
                  description={coffee.description} 
                  price={coffee.price}
                  image={coffee.image} 
                />
              )
            })
          }
        </CoffeeCountainer>
      </MainCountainer>
    </HomeCountainer>
    </CoffeeTheme>
  )
}