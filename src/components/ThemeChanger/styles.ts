import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 79.99px;
    height: 20px;
    justify-content: space-between;


    path {
        transition: 1s ease stroke;
    }

  &.dark path {
    stroke: #A445ED;
    }

`


export const ThemeButton = styled.button`
width: 40px;
height: 20px;
background: ${props => props.theme.themeButtonBg};
border-radius: 10px;
padding: 3px 23px 3px 3px;
`



export const Dot = styled.div`
  width: 14px;
  height: 14px;
  background: #FFFFFF;
  transition: margin 300ms linear;
  border-radius: 50%;

  &.light {
    margin-right: 20px;
  }
  &.dark {
    margin-left: 20px;
  }
`;