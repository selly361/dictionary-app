import { Container, Dot, ThemeButton } from './styles'

import { ICommonProps } from 'types'
import { MoonIcon } from 'assets'
import React from 'react'
import { useDebounce } from 'hooks/useDebounce'

function ThemeChanger({ theme, setTheme }: ICommonProps) {

  const debouncedSetTheme = useDebounce(() => setTheme(theme == "dark" ? "light" : "dark"), 800)

  return (
    <Container className={theme}>
        <MoonIcon />

        <ThemeButton onClick={debouncedSetTheme}>
            <Dot className={theme} />
        </ThemeButton>
    </Container>
  )
}

export default ThemeChanger