import { Header, Loading, SearchField } from "components";
import { ICommonProps, TFont } from "types";
import React, { Fragment, useEffect, useState } from "react";

import { GlobalStyles } from "global/styles";
import { StyledMain } from "./styles";

function Main(props: ICommonProps) {

  const [input, setInput] = useState("keyboard")


  useEffect(() => {
    
  }, [])


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
