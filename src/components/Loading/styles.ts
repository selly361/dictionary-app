import styled, { keyframes } from "styled-components";

const spin = keyframes`
     from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`;

export const StyledLoading = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  animation: 1s infinite ${spin} linear;
  border: 14px solid #333;
  border-top-color: ${(props) => props.theme.purple};
`;
