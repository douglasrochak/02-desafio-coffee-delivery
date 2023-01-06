import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem 28rem;

  gap: 0.75rem 2rem;

  .addressForm {
    grid-column: 1/2;
    grid-row: 1;
  }

  .paymentOptions {
    grid-column: 1/2;
  }
  .cartAndOrderConfirm {
    grid-row: 1;
  }
`;
