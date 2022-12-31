import styled from "styled-components";

export const BaseCardStyle = styled.div`
  background: ${({ theme }) => theme["gray-100"]};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`;
