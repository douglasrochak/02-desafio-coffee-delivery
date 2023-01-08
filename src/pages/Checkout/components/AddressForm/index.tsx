import { AddressFormContainer, InputWrapper } from "./style";
import { MapPinLine } from "phosphor-react";
import { SectionTitle } from "../SectionTitle";
import { useFormContext } from "react-hook-form";
import { Input } from "./Input";
import { AddressFormData } from "../..";

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddressFormData>();

  return (
    <AddressFormContainer>
      <SectionTitle
        icon={<MapPinLine size={22} />}
        color="yellow"
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />
      <InputWrapper>
        <Input
          error={errors.cep?.message}
          className="cep"
          placeholder="CEP"
          {...register("cep")}
        />
        <Input
          error={errors.street?.message}
          className="street"
          placeholder="Rua"
          {...register("street")}
        />
        <Input
          error={errors.number?.message}
          className="number"
          placeholder="Número"
          {...register("number")}
        />
        <Input
          error={errors.complement?.message}
          className="complement"
          placeholder="Complemento"
          {...register("complement")}
        />
        <Input
          error={errors.district?.message}
          className="district"
          placeholder="Bairro"
          {...register("district")}
        />
        <Input
          error={errors.city?.message}
          className="city"
          placeholder="Cidade"
          {...register("city")}
        />
        <Input
          error={errors.uf?.message}
          className="uf"
          placeholder="UF"
          {...register("uf")}
        />
      </InputWrapper>
    </AddressFormContainer>
  );
}
