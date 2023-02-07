import { HeadingL, HeadingM } from "global/defaultStyles";

import styled from "styled-components";

export const StyledArticle = styled.article`
  width: 737px;
  display: grid;
  gap: 40px;
  margin: auto;
`;

export const TopSection = styled.section`
  width: 737px;
  height: 114px;
  display: flex;
  justify-content: space-between;
  
`;

export const TitleContainer = styled.div`
  height: 114px;
  display: grid;
  
` 

export const Heading = styled.h1`
    ${HeadingL}
`

export const StyledPhonetic = styled.h2`
  ${HeadingM};
  color: ${props => props.theme.purple};
`

export const StyledPlayButton = styled.button`
  background: transparent;


  svg {
    transition: 1s ease opacity;
  }

  &:hover svg {
    opacity: 1;
  }
`


export const Divider = styled.div`
height: 1px;
width: 656px;
background-color: ${props => props.theme.articleDivider};
`

export const SubHeading = styled.h3`
  ${HeadingM}
  color: ${props => props.theme.text.primary};
  font-weight: 700;
  font-style: italic;

`

export const SubHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`

export const MiddleSection = styled.section`

`