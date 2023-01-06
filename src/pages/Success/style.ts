import styled from "styled-components";

export const SuccessContainer = styled.div`
  margin-top: 5rem;
`;

export const Title = styled.div`
  margin-bottom: 2.5rem;

  h2 {
    color: ${({ theme }) => theme["yellow-500"]};
  }
  p {
    font-size: 1.25rem;
    line-height: 130%;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;
