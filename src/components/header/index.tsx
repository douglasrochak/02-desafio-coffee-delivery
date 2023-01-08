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
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

export function Header() {
  const { cartItems } = useContext(CartContext);

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isCartEmpty = !!totalItemsInCart;

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
              {isCartEmpty && <div>{totalItemsInCart}</div>}
              <ShoppingCart weight="fill" size={22} />
            </CartButton>
          </Link>
        </AddressContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
