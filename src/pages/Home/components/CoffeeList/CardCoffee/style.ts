import styled from "styled-components";

export const CardCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1.25rem 1.25rem;

  max-width: 16rem;
  max-height: 19.375rem;

  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["gray-100"]};

  img {
    margin-top: -1.25rem;
    width: 100%;
    max-width: 7.5rem;
  }

  strong {
    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    line-height: 130%;

    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;

  margin-top: 0.75rem;

  span {
    border-radius: 100px;
    background-color: ${(props) => props.theme["yellow-100"]};
    padding: 0.25rem 0.5rem;

    color: ${(props) => props.theme["yellow-500"]};
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;
  }
`;

export const BuyInputBox = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.0625rem;

  input {
    max-width: 4.5rem;
    height: 2.375rem;

    background-color: ${(props) => props.theme["gray-300"]};
    border: 0;
    text-align: center;
  }

  button {
    background-color: ${(props) => props.theme["purple-900"]};
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme["gray-100"]};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme["purple-500"]};
    }
  }
`;

export const Price = styled.span`
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;

    &::before {
      content: "R$ ";
      width: 67px;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
    }`
