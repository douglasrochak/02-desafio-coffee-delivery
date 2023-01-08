import { SectionTitle } from "../SectionTitle";
import { InputWrapper, PaymentInput, PaymentOptionsContainer } from "./style";
import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { InputHTMLAttributes } from "react";
import { Error } from "../AddressForm/Input/style";

type PaymentOptionsProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export function PaymentOptions({ error }: PaymentOptionsProps) {
  const { register } = useFormContext();

  return (
    <PaymentOptionsContainer>
      <SectionTitle
        icon={<CurrencyDollar size={22} />}
        color="purple"
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      {error && <Error>{error}</Error>}
      <InputWrapper>
        <PaymentInput>
          <input
            value="Cartão de crédito"
            id="creditCard"
            type="radio"
            {...register("paymentOption")}
          />
          <label htmlFor="creditCard">
            <CreditCard size={16} />
            Cartão de crédito
          </label>
        </PaymentInput>

        <PaymentInput>
          <input
            value="Cartão de débito"
            id="debitCard"
            type="radio"
            {...register("paymentOption")}
          />
          <label htmlFor="debitCard">
            <Bank size={16} /> Cartão de débito
          </label>
        </PaymentInput>

        <PaymentInput>
          <input
            value="Dinheiro"
            id="money"
            type="radio"
            {...register("paymentOption")}
          />
          <label htmlFor="money">
            <Money size={16} /> Dinheiro
          </label>
        </PaymentInput>
      </InputWrapper>
    </PaymentOptionsContainer>
  );
}
