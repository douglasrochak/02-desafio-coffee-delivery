import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContextProvider";
import { CoffeeCard } from "./CoffeeCard";
import { OrderConfirm } from "./OrderConfirm";
import { CartAndOrderConfirmContainer } from "./style";

export function CartAndOrderConfirm() {
  const { cartItems } = useContext(CartContext);
  return (
    <CartAndOrderConfirmContainer>
      {cartItems.map((cartItem) => (
        <CoffeeCard
          key={cartItem.id}
          coffeeID={cartItem.id}
          coffeeImg={cartItem.image}
          coffeeName={cartItem.name}
          coffeePrice={cartItem.price}
          quantity={cartItem.quantity}
        />
      ))}
      <OrderConfirm />
    </CartAndOrderConfirmContainer>
  );
}
