import { HeadingM, Paragraph } from "global/defaultStyles";

import styled from "styled-components";

export const StyledErrorMessage = styled.div`
  display: grid;
  gap: 44px;
  text-align: center;
  margin: auto;
  width: 736px;

  @media (max-width: 813px){
    width: 95vw;
  }
`;

export const Title = styled.h2`
  ${HeadingM}
  color: ${(props) => props.theme.text.primary};
  font-weight: 700;
`;

export const Emoji = styled.div`
  font-size: 64px;
`;

export const Message = styled.p`
  ${Paragraph}
  color: ${(props) => props.theme.text.secondary};
`;
