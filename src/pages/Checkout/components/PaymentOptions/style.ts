import { BaseCardStyle } from "../BaseCardStyle";
import styled from "styled-components";

export const PaymentOptionsContainer = styled(BaseCardStyle)``;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const PaymentInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  max-width: 11.25rem;

  background: ${({ theme }) => theme["gray-300"]};
  border-radius: 6px;
  padding: 1rem;

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 160%;
  }

  svg {
    color: ${({ theme }) => theme["purple-500"]};
  }
`;
