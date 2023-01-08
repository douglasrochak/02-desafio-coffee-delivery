import { BaseCardStyle } from "../BaseCardStyle";
import styled from "styled-components";

export const PaymentOptionsContainer = styled(BaseCardStyle)``;

export const PaymentMethodContainer = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const PaymentInput = styled.div`
  width: 100%;
  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    max-width: 11.25rem;

    background: ${({ theme }) => theme["gray-300"]};
    border-radius: 6px;
    padding: 1rem;

    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 160%;
    &:hover {
      background: ${({ theme }) => theme["gray-400"]};
    }
  }

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label {
    box-shadow: inset 0px 0px 0px 1px ${({ theme }) => theme["purple-500"]};
    background: ${({ theme }) => theme["purple-100"]};
    &:hover {
      background: ${({ theme }) => theme["gray-400"]};
    }
  }

  svg {
    color: ${({ theme }) => theme["purple-500"]};
  }
`;
