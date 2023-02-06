import { Container, Divider, StyledHeader } from "./styles";

import { FontSelector, ThemeChanger } from "components";
import { ICommonProps } from "types";
import { LogoIcon } from "assets";
import React from "react";

function Header(props: ICommonProps) {

  
  return (
    <StyledHeader>
      <LogoIcon />

      <Container>
        <FontSelector {...props} />
        <Divider />
      <ThemeChanger {...props} />
      </Container>
    </StyledHeader>
  );
}

export default Header;
  