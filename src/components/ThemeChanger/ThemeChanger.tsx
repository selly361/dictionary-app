import { MoonIcon } from 'assets'
import React from 'react'
import { ICommonProps } from 'types'
import { Container, Dot, ThemeButton } from './styles'

function ThemeChanger({ theme, setTheme }: ICommonProps) {
  return (
    <Container className={theme}>
        <MoonIcon />

        <ThemeButton onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
            <Dot className={theme} />
        </ThemeButton>
    </Container>
  )
}

export default ThemeChanger