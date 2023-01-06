import styled from "styled-components";

export const AddressContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.background};

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 6px 36px;
    background: linear-gradient(
      103deg,
      ${({ theme }) => theme["yellow-500"]} 3%,
      ${({ theme }) => theme["purple-500"]} 95%
    );
    z-index: -1;
  }
`;
