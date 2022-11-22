import styled from "styled-components";
import introBackground from "../../../../assets/intro-images/intro-background.svg";

export const IntroBackground = styled.div`
  /* position: absolute;

  background-image: url(${introBackground});
  background-size: cover; */
`;

export const IntroContainer = styled.div`
  &::before {
    content: " ";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 10rem;
    background-image: url(${introBackground});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 34rem;
  }
  display: flex;
  align-items: center;
  padding: 5.875rem 0 6.75rem;

  h1 {
    color: ${(props) => props.theme["gray-700"]};
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    padding-bottom: 1rem;
  }

  h4 {
    color: ${(props) => props.theme["gray-600"]};
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    margin-bottom: 4.125rem;
  }
`;

export const IconsBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;

  p {
    line-height: 130%;
    padding: 0.5rem 0;
  }
`;

const IconBoxBase = styled.span`
  border-radius: 1000px;
  color: ${(props) => props.theme.background};

  padding: 0.5rem;
  margin-right: 0.75rem;
`;

export const CartIconBox = styled(IconBoxBase)`
  background-color: ${(props) => props.theme["yellow-900"]};
`;

export const PackageIconBox = styled(IconBoxBase)`
  background-color: ${(props) => props.theme["gray-500"]};
`;

export const TimerIconBox = styled(IconBoxBase)`
  background-color: ${(props) => props.theme["yellow-500"]};
`;

export const CoffeeIconBox = styled(IconBoxBase)`
  background-color: ${(props) => props.theme["purple-500"]};
`;
