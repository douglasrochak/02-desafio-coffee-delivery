import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.75rem;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${({ theme }) => theme["base-label"]};
    background: ${({ theme }) => theme["gray-200"]};
    border: 1px solid ${({ theme }) => theme["gray-300"]};
    border-radius: 4px;
  }
`;

export const Error = styled.span`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: tomato;
`;
