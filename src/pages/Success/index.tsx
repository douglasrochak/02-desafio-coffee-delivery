import { Body, SuccessContainer, Title } from "./style";

import illustration from "../../assets/success-images/illustration.svg";
import { Address } from "./components/Address";

export function Success() {
  return (
    <SuccessContainer>
      <Title>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <Body>
        <Address />
        <img src={illustration} alt="" />
      </Body>
    </SuccessContainer>
  );
}
