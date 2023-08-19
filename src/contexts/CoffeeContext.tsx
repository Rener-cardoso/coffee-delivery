import { ReactNode, createContext, useState } from "react";
import { CoffeeCardProps } from "../components/CoffeeCard";

import Coffee1 from "../assets/Coffees/Coffee1.png"
import Coffee2 from "../assets/Coffees/Coffee2.png"
import Coffee3 from "../assets/Coffees/Coffee3.png"
import Coffee4 from "../assets/Coffees/Coffee4.png"
import Coffee5 from "../assets/Coffees/Coffee5.png"
import Coffee6 from "../assets/Coffees/Coffee6.png"
import Coffee7 from "../assets/Coffees/Coffee7.png"
import Coffee8 from "../assets/Coffees/Coffee8.png"
import { Bank, CreditCard, Money } from "@phosphor-icons/react";

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface CartItem extends CoffeeCardProps {
  quantity: number;
}

interface CoffeeContextProps {
  cartItems: CartItem[];
  Coffees: CoffeeCardProps[];
  cartQuantity: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (cartItemName: string, type: "increase" | "decrease") => void;
  removeProduct: (nameProduct: string) => void;
  toggleCheckedPaymentForm: (paymentOptionsId: number) => void;
  paymentOptions: paymentOptionsListProps[];
}

interface paymentOptionsListProps {
  id: number;
  title: string;
  icon: JSX.Element;
  ischecked: boolean;
}[]

const paymentOptionsList = [
  {
    id: 1,
    title:"Cartão de crédito",
    icon: <CreditCard color="#8047F8" size={16} />,
    ischecked: false
  },
  {
    id: 2,
    title:"Cartão de débito",
    icon: <Bank color="#8047F8" size={16} />, 
    ischecked: false
  }, 
  {
    id: 3,
    title:"Dinheiro",
    icon: <Money color="#8047F8" size={16} />, 
    ischecked: false
  }
]

export const CoffeeContext = createContext({} as CoffeeContextProps)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentOptions, setPaymentOptions] = useState(paymentOptionsList)

  const cartQuantity = cartItems.length

  const Coffees = [
    {
      typeCoffee: ['Tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9.90',
      image: Coffee1
    },
    {
      typeCoffee: ['Tradicional'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9.90',
      image: Coffee2
    },
    {
      typeCoffee: ['Tradicional'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: '9.90',
      image: Coffee3
    },
    {
      typeCoffee: ['Tradicional', 'Gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: '9.90',
      image: Coffee4
    },
    {
      typeCoffee: ['Tradicional', 'Com Leite'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: '9.90',
      image: Coffee5
    },
    {
      typeCoffee: ['Tradicional', 'Com leite'],
      name: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: '9.90',
      image: Coffee6
    },
    {
      typeCoffee: ['Tradicional', 'Com leite'],
      name: 'Capuccino',
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: '9.90',
      image: Coffee7
    },
    {
      typeCoffee: ['Tradicional', 'Com leite'],
      name: 'Macchiato',
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: '9.90',
      image: Coffee8
    },
  ]

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.name === coffee.name)

    if(coffeeAlreadyExistsInCart < 0) {
      setCartItems([...cartItems, coffee])
    } else {
      cartItems[coffeeAlreadyExistsInCart].quantity += coffee.quantity
    }
  }

  function changeCartItemQuantity(
    cartItemName: string, 
    type: "increase" | "decrease"
  ) {
    const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.name === cartItemName)
  
    if(coffeeExistsInCart >= 0) {
      const item = cartItems[coffeeExistsInCart];
      cartItems[coffeeExistsInCart].quantity =
       type === "increase" ? item.quantity + 1 : item.quantity - 1 
      console.log(cartItems)
      setCartItems([...cartItems])
    }
  }
  
  function removeProduct(nameProduct: string) {

    setCartItems(prevState => prevState.filter(product => product.name !== nameProduct))

  }

  function toggleCheckedPaymentForm(paymentOptionsId: number) {
    const togglePymentForm = paymentOptions.map(paymentOption => {
      if(paymentOption.id === paymentOptionsId) {
        return {
          ...paymentOption,
          ischecked: !paymentOption.ischecked
        }
      }
      return paymentOption;
    })
    setPaymentOptions(togglePymentForm)
  }

  return (
    <CoffeeContext.Provider value={{
      cartItems, 
      addCoffeeToCart, 
      Coffees, 
      cartQuantity, 
      changeCartItemQuantity, 
      removeProduct, 
      toggleCheckedPaymentForm, 
      paymentOptions 
    }}>
      { children }
    </CoffeeContext.Provider>
  )
}
