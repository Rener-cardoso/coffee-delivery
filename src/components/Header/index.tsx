import logo from "../../assets/logo.svg";
import { ShoppingCartSimple, MapPin } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"

import { HeaderCountainer, HeaderOutCountainer, MapPinCountainer, NavCountainer, ShoppingCartCountainer } from "./styles"
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();


  return (
   <HeaderOutCountainer> 
    <HeaderCountainer>
      <NavLink to="/" >
          <img src={logo} alt="" />
      </NavLink>
      <NavCountainer>
        <MapPinCountainer>
          <MapPin size={22} color="#8047F8" weight="fill" /><span>Porto Alegre, RS</span>
        </MapPinCountainer>
        <NavLink to="/checkout">
          <ShoppingCartCountainer>
            {cartQuantity > 0 && <div>{cartQuantity}</div>}
            <ShoppingCartSimple size={22} color="#C47F17" weight="fill" />
          </ShoppingCartCountainer>
        </NavLink>
      </NavCountainer>
    </HeaderCountainer>
   </HeaderOutCountainer>
  )
} 