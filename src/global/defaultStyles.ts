import { css } from "styled-components";

/* Typograhy */

const commonProperties = css`
  font-family: ${({ theme }) => theme.font};
`;

const HeadingL = css`
  ${commonProperties}
  color: ${({ theme }) => theme.text.primary};
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
`;

const HeadingM = css`
  ${commonProperties}
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const HeadingS = css`
  ${commonProperties}
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

const Paragraph = css`
  ${commonProperties}
  color: ${({ theme }) => theme.text.primary};
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const ParagraphS = css`
  ${commonProperties}
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
`;

/* Form Elements */

const SearchFieldContainer = css`
  width: 736px;
  height: 64px;
  border-radius: 16px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  Background: ${props => props.theme.inputBg};
  margin: auto;

  &:focus {
    border: 1px solid #a445ed;
  }

  &.error {
    border: 1px solid #ff5252;
  }
`;

const SearchField = css`
  ${commonProperties}
  color: ${({ theme }) => theme.text.primary};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  transition: 1s ease border;
  background: transparent;
  width: 90%;
`;

const PlayButon = css`
  path {
    transition: 1s ease fill;
  }
  &:hover path {
    fill: #a445ed;
  }
`;

export {
  HeadingL,
  HeadingM,
  HeadingS,
  SearchField,
  SearchFieldContainer,
  Paragraph,
  ParagraphS,
  PlayButon,
};
