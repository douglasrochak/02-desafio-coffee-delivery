import styled from "styled-components";

export const NumberInputContainer = styled.div`
  max-width: 4.5rem;

  display: flex;
  align-items: center;
  padding: 0.53125rem 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["gray-300"]};

  svg {
    color: ${({ theme }) => theme["purple-500"]};

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme["purple-900"]};
      transition: color 0.3s;
    }
  }
`;

export const Number = styled.span`
  min-width: 1.25rem;
  font-size: 1rem;
  line-height: 130%;
  text-align: center;
  color: ${({ theme }) => theme["gray-700"]};
`;
