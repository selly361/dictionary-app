import {
  Article,
  ErrorMessage,
  Header,
  Loading,
  SearchField,
} from "components";
import { Fragment, useState } from "react";

import { GlobalStyles } from "global/styles";
import { ICommonProps } from "types";
import { StyledMain } from "./styles";
import { useFetchData } from "hooks/useFetchData";

function Main(props: ICommonProps) {
  const [input, setInput] = useState("bad");

  const { data, loading, error, fetchData } = useFetchData(input);

  function handleClick(word: string) {
    setInput(word);
    fetchData(word);
  }

  return (
    <Fragment>
      <GlobalStyles />
      <StyledMain>
        <Header {...props} />
        <SearchField fetchData={fetchData} input={input} setInput={setInput} />
        {loading ? (
          <Loading />
        ) : !loading && !error ? (
          <Article handleClick={handleClick} data={data} />
        ) : (
          <ErrorMessage />
        )}
      </StyledMain>
    </Fragment>
  );
}

export default Main;
