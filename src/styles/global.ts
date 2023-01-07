import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  a {
    font-size: 0;
    line-height: 0;
    &:focus {
    box-shadow: none;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-900"]};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["gray-500"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  button {
    border: none;
    cursor: pointer;
  }

  h2 {
    font-size: 2rem;
    font-family: "Baloo 2";
    line-height: 130%;
    font-weight: 800;
  }

`;
