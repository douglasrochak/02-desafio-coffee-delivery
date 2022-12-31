import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";

import {
  AddressContainer,
  CartButton,
  HeaderContainer,
  HeaderWrapper,
  Logo,
} from "./style";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <Logo src={logo} alt="Coffee Delivery logo" />
        </Link>
        <AddressContainer>
          <span>
            <MapPin weight="fill" size={22} />
            Porto Alegre, RS
          </span>
          <Link to="/checkout">
            <CartButton>
              <ShoppingCart weight="fill" size={22} />
            </CartButton>
          </Link>
        </AddressContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
