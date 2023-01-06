import { AddressForm } from "./components/AddressForm";
import { CartAndOrderConfirm } from "./components/CartAndOrderConfirm";
import { PaymentOptions } from "./components/PaymentOptions";
import { CheckoutContainer } from "./style";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="addressForm">
        <AddressForm />
        <div className="paymentOptions">
          <PaymentOptions />
        </div>
      </div>

      <div className="cartAndOrderConfirm">
        <CartAndOrderConfirm />
      </div>
    </CheckoutContainer>
  );
}
