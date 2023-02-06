import { StyledFieldSet, StyledInput } from './styles'
import React from 'react'
import { ISearchFieldProps } from 'types'
import { SearchIcon } from 'assets'

function SearchField({ input, setInput }: ISearchFieldProps) {
  return (
    <StyledFieldSet>
      <StyledInput value={input} onChange={(e) => setInput(e.target.value)} />
      <SearchIcon />
    </StyledFieldSet>
  )
}

export default SearchField