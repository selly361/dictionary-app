import { SearchField, SearchFieldContainer } from "global/defaultStyles"

import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`
    ${SearchFieldContainer};


    @media (max-width: 813px){
    width: 95vw;
  }
`


export const StyledInput = styled.input`
    ${SearchField};
`