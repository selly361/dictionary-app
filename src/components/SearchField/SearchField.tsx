import { ErrorMessage, StyledFieldSet, StyledInput } from "./styles";
import React, { useEffect, useState } from "react";

import { ISearchFieldProps } from "types";
import { SearchIcon } from "assets";
import { useDebounce } from "hooks/useDebounce";

function SearchField({ input, setInput, fetchData }: ISearchFieldProps) {
  const debouncedFetcData = useDebounce(() => fetchData(input), 1000);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (!input.trim()) {
      setError(true);
    } else {
      setError(false)
    }
  }, [input]);

  return (
    <div>
      <StyledFieldSet className={error ? "error" : ""}>
        <StyledInput
          placeholder="Search for any word…"
          value={input}
          onKeyUp={(e) => {
            if (e.key == "Enter" && !error) debouncedFetcData();
          }}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon onClick={debouncedFetcData} />
      </StyledFieldSet>
      {error && <ErrorMessage>Whoops, can’t be empty…</ErrorMessage>}
    </div>
  );
}

export default SearchField;
