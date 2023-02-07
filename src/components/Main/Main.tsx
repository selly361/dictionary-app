import { Article, ErrorMessage, Header, Loading, SearchField } from "components";
import { ICommonProps, TFont } from "types";
import React, { Fragment, useEffect, useState } from "react";

import { GlobalStyles } from "global/styles";
import { StyledMain } from "./styles";
import { useDebounce } from "hooks/useDebounce";
import { useFetchData } from "hooks/useFetchData";

function Main(props: ICommonProps) {
  const [input, setInput] = useState("keyboard");

  const { data, loading, error, fetchData } = useFetchData(input);




  

  return (
    <Fragment>
      <GlobalStyles />
      <StyledMain>
        <Header {...props} />
        <SearchField fetchData={fetchData} input={input} setInput={setInput} />
        {loading ? <Loading /> : !loading && !error ? <Article data={data} /> : <ErrorMessage />}
      </StyledMain>
    </Fragment>
  );
}

export default Main;
