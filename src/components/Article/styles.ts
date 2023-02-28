import {
  HeadingL,
  HeadingM,
  HeadingS,
  Paragraph,
  ParagraphS,
} from "global/defaultStyles";

import styled from "styled-components";

export const StyledArticle = styled.article`
  width: 736.1px;
  display: grid;
  gap: 40px;
  margin: auto;
  padding-left: 10px;


  @media (max-width: 813px){
    width: 95vw;
  }
`;

export const TopSection = styled.section`
  width: 736.1px;
  height: 114px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 813px){
    width: 95vw;
  }
`;

export const TitleContainer = styled.div`
  height: 114px;
  display: grid;
`;

export const Heading = styled.h1`
  ${HeadingL}
`;

export const StyledPhonetic = styled.h2`
  ${HeadingM};
  color: ${(props) => props.theme.purple};
`;

export const Divider = styled.div`
  height: 1px;
  width: 656px;
  background-color: ${(props) => props.theme.articleDivider};
`;

export const BottomDivider = styled(Divider)`
  width: 736.1px; ;
`;

export const SubHeading = styled.h3`
  ${HeadingM}
  color: ${(props) => props.theme.text.primary};
  font-weight: 700;
  font-style: italic;
`;

export const SubHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 40px;
`;

export const MiddleSection = styled.section`
  width: 736.1px;


  @media (max-width: 813px){
    width: 95vw;
  }
`;

export const SecondarySubHeading = styled.h4`
  ${HeadingS};
  color: ${(props) => props.theme.text.secondary};
  padding-bottom: 20px;
`;

export const ListContainer = styled.ul`
  width: 100%;
  display: grid;
  gap: 13px;
  padding-left: 20px;
  list-style: none;
  margin-bottom: 23px;
`;

export const ListItemContainer = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  height: max-content;
`;

export const ListItem = styled.li`
  color: ${(props) => props.theme.text.primary};
  ${Paragraph};
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 13px;
`;

export const BulletPoint = styled.div`
  min-height: 5px;
  min-width: 5px;
  border-radius: 50%;
  background: ${(props) => props.theme.purple};
`;

export const ExampleText = styled.p`
  ${Paragraph}
  color: ${(props) => props.theme.text.secondary};
  padding-left: 20px;
  max-width: 100%;
`;

export const ThesaurusWord = styled.button`
  height: 24px;
  width: 195px;
  color: #a445ed;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  background-color: transparent;
  grid-row: span 2;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

export const ThesaurusContainer = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: 1fr 1fr 1fr;


  @media (max-width: 900px){
    grid-template-columns: 1fr 1fr;
  }
`;

export const SourceLabel = styled.h5`
  ${ParagraphS}
  color: ${(props) => props.theme.text.secondary};
`;

export const SourceContent = styled.a`
  ${ParagraphS}
  color: ${(props) => props.theme.text.primary};
`;

export const BottomContainer = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;

  & > div {
    display: flex;
    gap: 3px;
  }
`;
