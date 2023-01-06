import {
  ConfirmButton,
  OrderConfirmContainer,
  Price,
  Text,
  Total,
} from "./style";

export function OrderConfirm() {
  return (
    <OrderConfirmContainer>
      <div>
        <Text>Total de itens</Text>
        <Price>R$ 5,90</Price>
      </div>
      <div>
        <Text>Entrega</Text>
        <Price>R$ 5,90</Price>
      </div>
      <Total>
        <Text>Total</Text>
        <Price>R$ 5,90</Price>
      </Total>
      <ConfirmButton type="button">Confirmar Pedido</ConfirmButton>
    </OrderConfirmContainer>
  );
}
