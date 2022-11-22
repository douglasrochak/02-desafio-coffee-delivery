import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";

import {
  AddressContainer,
  CartButton,
  HeaderContainer,
  HeaderWrapper,
} from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logo} alt="Coffee Delivery logo" />
        <AddressContainer>
          <span>
            <MapPin weight="fill" size={22} />
            Porto Alegre, RS
          </span>
          <CartButton>
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </AddressContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
