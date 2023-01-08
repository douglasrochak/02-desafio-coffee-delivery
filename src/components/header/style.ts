import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  background-color: ${(props) => props.theme.background};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(70rem + 4rem);
  margin: 0 auto;
  padding: 2rem 2rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    align-items: center;
    display: flex;

    color: ${(props) => props.theme["purple-900"]};
    border-radius: 6px;
    background-color: ${(props) => props.theme["purple-100"]};
    padding: 0.5rem;
    svg {
      color: ${(props) => props.theme["purple-500"]};
    }
  }
`;
export const Logo = styled.img`
  &:focus {
    box-shadow: none;
  }
`;

export const CartButton = styled.button`
  position: relative;
  background-color: ${(props) => props.theme["yellow-100"]};
  border-radius: 6px;
  border: none;
  color: ${(props) => props.theme["yellow-900"]};
  padding: 0.5rem;

  height: 38px;

  div {
    position: absolute;
    top: -8px;
    right: -8.35px;

    background-color: ${({ theme }) => theme["yellow-900"]};
    color: ${({ theme }) => theme.white};
    border-radius: 99px;
    width: 1.25rem;
    height: 1.25rem;

    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
  }
`;
