import { AddressFormContainer, Input, InputWrapper } from "./style";
import { MapPinLine } from "phosphor-react";
import { SectionTitle } from "../SectionTitle";
import { useForm } from "react-hook-form";

export function AddressForm() {
  const { register } = useForm();
  return (
    <AddressFormContainer>
      <SectionTitle
        icon={<MapPinLine size={22} />}
        color="yellow"
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />
      <InputWrapper>
        <Input {...register} required placeholder="CEP" className="cep" />
        <Input {...register} placeholder="Rua" className="street" />
        <Input {...register} placeholder="Número" className="number" />
        <Input {...register} placeholder="Complemento" className="complement" />
        <Input {...register} placeholder="Bairro" className="district" />
        <Input {...register} placeholder="Cidade" className="city" />
        <Input {...register} placeholder="UF" className="uf" />
      </InputWrapper>
    </AddressFormContainer>
  );
}
