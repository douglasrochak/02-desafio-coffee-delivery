import { AddressFormContainer, Input, InputWrapper } from "./style";
import { MapPinLine } from "phosphor-react";
import { SectionTitle } from "../SectionTitle";

export function AddressForm() {
  return (
    <AddressFormContainer>
      <SectionTitle
        icon={<MapPinLine size={22} />}
        color="yellow"
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />
      <InputWrapper>
        <Input placeholder="CEP" className="cep" />
        <Input placeholder="Rua" className="street" />
        <Input placeholder="Número" className="number" />
        <Input placeholder="Complemento" className="complement" />
        <Input placeholder="Bairro" className="district" />
        <Input placeholder="Cidade" className="city" />
        <Input placeholder="UF" className="uf" />
      </InputWrapper>
    </AddressFormContainer>
  );
}
