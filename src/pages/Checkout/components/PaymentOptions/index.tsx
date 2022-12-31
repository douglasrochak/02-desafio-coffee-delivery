import { SectionTitle } from "../SectionTitle";
import { InputWrapper, PaymentInput, PaymentOptionsContainer } from "./style";
import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";

export function PaymentOptions() {
  return (
    <PaymentOptionsContainer>
      <SectionTitle
        icon={<CurrencyDollar size={22} />}
        color="purple"
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      <InputWrapper>
        <PaymentInput>
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </PaymentInput>
        <PaymentInput>
          <Bank size={16} />
          <span>Cartão de débito</span>
        </PaymentInput>
        <PaymentInput>
          <Money size={16} />
          <span>Dinheiro</span>
        </PaymentInput>
      </InputWrapper>
    </PaymentOptionsContainer>
  );
}
