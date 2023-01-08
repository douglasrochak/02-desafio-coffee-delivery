import { AddressForm } from "./components/AddressForm";
import { CartAndOrderConfirm } from "./components/CartAndOrderConfirm";
import { PaymentOptions } from "./components/PaymentOptions";
import { CheckoutContainer } from "./style";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentOption: zod
    .string()
    .or(zod.null())
    .refine((val) => Boolean(val), {
      message: "Escolha uma opção de pagamento!",
    }),
});

export type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

export function Checkout() {
  const { clearCart } = useContext(CartContext);

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = addressForm;
  const navigate = useNavigate();

  function handleAddressForm(data: AddressFormData) {
    navigate("/success", {
      state: data,
    });
    clearCart();
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleAddressForm)} id="addressForm">
        <FormProvider {...addressForm}>
          <div className="addressForm">
            <AddressForm />
            <div className="paymentOptions">
              <PaymentOptions error={errors.paymentOption?.message} />
            </div>
          </div>
          <div className="cartAndOrderConfirm">
            <CartAndOrderConfirm />
          </div>
        </FormProvider>
      </form>
    </CheckoutContainer>
  );
}
