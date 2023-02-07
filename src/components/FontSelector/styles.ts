import { Paragraph } from "global/defaultStyles";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledButton = styled.button`
  width: 120px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Paragraph}
  background-color: transparent;
  font-weight: 700;

  svg {
    transition: transform 1s ease;
  }

  &.active svg {
    transform: rotate(180deg);
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const DropDown = styled(motion.div)`
  width: 188px;
  height: 152px;
  background-color: ${(props) => props.theme.dropDownBg};
  box-shadow: ${(props) => props.theme.dropDownShadow};
  border-radius: 16px;
  padding: 24px 69px 24px 24px;
  display: flex;
  flex-flow: column;
  gap: 16px;
  position: absolute;
  bottom: -170px;
  margin: auto;
  left: -30px;
`;

export const SansSerif = styled.p`
  ${Paragraph};
  font-weight: 700;
  font-family: 'Inter';
  color: ${(props) => props.theme.text.primary};
  cursor: pointer;
  transition: 1s ease color;

  &:hover {
    color: ${(props) => props.theme.purple};
  }
`;

export const Serif = styled(SansSerif)`
  font-family: "Lora";
`;

export const Mono = styled(Serif)`
  font-family: "Inconsolata";
`;
