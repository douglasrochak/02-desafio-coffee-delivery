import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const Icon = styled.div`
  svg {
    color: ${(props) => {
      switch (props.color) {
        case "yellow":
          return props.theme["yellow-900"];
        case "purple":
          return props.theme["purple-500"];
        default:
          return "black";
      }
    }};
  }
`;
