import { DefaultTheme } from "styled-components";

type TFont = "Sans Serif" | "Serif" | "Mono";

interface IText {
  primary: string;
  secondary: string;
}

enum EFonts {
  "Sans Serif" = "Inter",
  "Serif" = "Lora",
  "Mono" = "Inconsolata",
}


interface ICommonProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setThemeStyles: React.Dispatch<
    React.SetStateAction<{
      light: DefaultTheme;
      dark: DefaultTheme;
    }>
  >;
  themeStyles: {
    dark: DefaultTheme;
    light: DefaultTheme;
  };
}

interface ISearchFieldProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>
}


export type { TFont, IText, ICommonProps, ISearchFieldProps };
export { EFonts };
