import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { CheckoutContainer } from "./style";

export function Checkout() {
  const { cartItems } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <p>Pagina de Checkout</p>
      <div>{JSON.stringify(cartItems, null, 0)}</div>
    </CheckoutContainer>
  );
}
