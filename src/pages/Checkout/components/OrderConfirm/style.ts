import styled from "styled-components";

export const OrderConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Text = styled.span`
  font-size: 0.875rem;
  line-height: 130%;
`;

export const Price = styled.span`
  line-height: 130%;
`;

export const Total = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  color: ${({ theme }) => theme["gray-600"]};
`;

export const ConfirmButton = styled.button`
  margin-top: 0.75rem;

  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["yellow-500"]};
  color: ${({ theme }) => theme.white};
`;
