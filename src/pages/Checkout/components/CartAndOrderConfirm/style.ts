import styled from "styled-components";

import { BaseCardStyle } from "../BaseCardStyle";

export const CartAndOrderConfirmContainer = styled(BaseCardStyle)`
  border-radius: 6px 44px;

  & > div:not(:last-child) {
    margin-bottom: 3rem;
  }
`;
