import {
  HeadingS,
  SearchField,
  SearchFieldContainer,
} from "global/defaultStyles";

import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`
  ${SearchFieldContainer};
  margin-bottom: 8px;

  @media (max-width: 813px) {
    width: 95vw;
  }
`;

export const StyledInput = styled.input`
  ${SearchField};
`;
export const ErrorMessage = styled.p`
  ${HeadingS}
  color: #ff5252;
`;
