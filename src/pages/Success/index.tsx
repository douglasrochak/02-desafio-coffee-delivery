import { Body, SuccessContainer, Title } from "./style";

import illustration from "../../assets/success-images/illustration.svg";
import { Address } from "./components/Address";
// import { AddressFormData } from "../Checkout";
import { useLocation } from "react-router-dom";

export function Success() {
  const { state } = useLocation() as any;

  return (
    <SuccessContainer>
      <Title>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <Body>
        <Address
          street={state.street}
          number={state.number}
          city={state.city}
          district={state.district}
          uf={state.uf}
          paymentOption={state.paymentOption}
        />
        <img src={illustration} alt="" />
      </Body>
    </SuccessContainer>
  );
}
