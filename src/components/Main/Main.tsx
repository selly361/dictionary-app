import { Header, Loading, SearchField } from "components";
import { ICommonProps, TFont } from "types";
import React, { Fragment, useEffect, useState } from "react";

import { GlobalStyles } from "global/styles";
import { StyledMain } from "./styles";
import { useFetchData } from "hooks/useFetchData";

function Main(props: ICommonProps) {
  const [input, setInput] = useState("keyboard");

  const { data, loading, error, fetchData } = useFetchData(input);

  

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
