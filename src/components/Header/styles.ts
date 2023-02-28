import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 36.5px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  background-color: transparent;
  align-items: center;

  @media (max-width: 813px){
    padding-right: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  height: max-content;
  justify-content: space-between;
  gap: 26px;
  align-items: center;
`;

export const Divider = styled.div`
  width: 1px;
  height: 32px;
  background: #e9e9e9;
`;


