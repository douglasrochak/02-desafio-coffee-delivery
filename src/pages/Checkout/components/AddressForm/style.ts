import { BaseCardStyle } from "../BaseCardStyle";
import styled from "styled-components";

export const AddressFormContainer = styled(BaseCardStyle)`
  .cep {
    grid-column: 1;
  }

  .street {
    grid-column: 1/4;
  }

  .number {
    grid-column: 1;
  }

  .complement {
    grid-column: 2/4;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.5rem;
  row-gap: 0.75rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${({ theme }) => theme["base-label"]};
  background: ${({ theme }) => theme["gray-200"]};
  border: 1px solid ${({ theme }) => theme["gray-300"]};
  border-radius: 4px;
`;
