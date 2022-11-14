import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";

import { AddressContainer, CartButton, HeaderContainer } from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery logo" />
      <AddressContainer>
        <span>
          <MapPin size={22} />
          Porto Alegre, RS
        </span>
        <CartButton>
          <ShoppingCart size={22} />
        </CartButton>
      </AddressContainer>
    </HeaderContainer>
  );
}
