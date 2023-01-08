import { useContext } from "react";
import { PriceText } from "../../../../../components/PriceText";
import { CartContext } from "../../../../../contexts/CartContextProvider";
import {
  ConfirmButton,
  OrderConfirmContainer,
  Price,
  Text,
  Total,
} from "./style";

export function OrderConfirm() {
  const { cartItems } = useContext(CartContext);

  const isCartNotEmpty = Boolean(cartItems.length);

  const totalItemsPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = 5.9;

  const totalPrice = totalItemsPrice + delivery;

  return (
    <OrderConfirmContainer>
      <div>
        <Text>Total de itens</Text>
        <Price>
          R$ <PriceText priceNumber={totalItemsPrice} />
        </Price>
      </div>
      <div>
        <Text>Entrega</Text>
        <Price>
          R$ <PriceText priceNumber={delivery} />
        </Price>
      </div>
      <Total>
        <Text>Total</Text>
        <Price>
          <PriceText priceNumber={totalPrice} />
        </Price>
      </Total>
      <ConfirmButton
        disabled={!isCartNotEmpty}
        type="submit"
        form="addressForm"
      >
        Confirmar Pedido
      </ConfirmButton>
    </OrderConfirmContainer>
  );
}
