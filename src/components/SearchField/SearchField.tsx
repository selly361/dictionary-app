import { StyledFieldSet, StyledInput } from "./styles";

import { ISearchFieldProps } from "types";
import React from "react";
import { SearchIcon } from "assets";
import { useDebounce } from "hooks/useDebounce";

function SearchField({ input, setInput, fetchData }: ISearchFieldProps) {


  const debouncedFetcData = useDebounce(fetchData, 1000)


  return (
    <StyledFieldSet>
      <StyledInput
        value={input}
        onKeyDown={(e) => {
          if (e.key == "Enter") debouncedFetcData();
        }}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchIcon onClick={debouncedFetcData} />
    </StyledFieldSet>
  );
}

export default SearchField;
