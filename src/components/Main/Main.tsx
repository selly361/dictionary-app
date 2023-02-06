import { ICommonProps, TFont } from "types";
import React, { Fragment, useState } from "react";

import { GlobalStyles } from "global/styles";
import { Header, SearchField } from "components";
import { StyledMain } from "./styles";

function Main(props: ICommonProps) {

  const [input, setInput] = useState("keyboard")



  return (
    <Fragment>
      <GlobalStyles />
      <StyledMain>
      <Header {...props} />
      <SearchField input={input} setInput={setInput} />
      </StyledMain>
    </Fragment>
  );
}

export default Main;
