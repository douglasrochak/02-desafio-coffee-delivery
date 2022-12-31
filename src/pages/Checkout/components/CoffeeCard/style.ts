import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    width: 5.25rem;
    margin-right: 1.25rem;
  }
`;

export const Title = styled.span`
  line-height: 130%;
  margin-bottom: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ButtonRemove = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme["gray-300"]};

  svg {
    color: ${({ theme }) => theme["purple-500"]};
  }
`;

export const Price = styled.span`
  margin-left: 3.125rem;

  font-weight: 700;
  line-height: 130%;
  color: ${({ theme }) => theme["gray-500"]};
`;
