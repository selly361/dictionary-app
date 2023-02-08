import { Article, ErrorMessage, Header, Loading, SearchField } from "components";
import { ICommonProps, TFont } from "types";
import React, { Fragment, useEffect, useRef, useState } from "react";

import { GlobalStyles } from "global/styles";
import { StyledMain } from "./styles";
import { useDebounce } from "hooks/useDebounce";
import { useFetchData } from "hooks/useFetchData";

function Main(props: ICommonProps) {
  const [input, setInput] = useState("Trichotillomania");
  const audioRef = useRef<HTMLAudioElement>(null);

  const { data, loading, error, fetchData } = useFetchData(input);


  function handleClick(word: string){
    setInput(word)
    fetchData(word)
  }



  const play = () => {
    if(audioRef.current){
      audioRef.current.play()
    }
  }

  useEffect(() => {
    play()
  })

  return (
    <Fragment>
      <GlobalStyles />
      <StyledMain>
        <Header {...props} />
        <SearchField  fetchData={fetchData} input={input} setInput={setInput} /> 
        {loading ? <Loading /> : !loading && !error ? <Article handleClick={handleClick} data={data} /> : <ErrorMessage />}
      </StyledMain>
      <audio ref={audioRef} src="ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3" />
    </Fragment>
  );
}

export default Main;
