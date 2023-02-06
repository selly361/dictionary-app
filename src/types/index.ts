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

/* Type for the data returned from the api */

interface ILicense {
  name: string;
  url: string;
}

interface IPhonetic {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: ILicense;
}

interface IDefinition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

interface IPartOfSpeech {
  partOfSpeech: string;
  definitions: IDefinition[];
  synonyms: string[];
  antonyms: string[];
}

interface IWord {
  word: string;
  phonetic: string;
  phonetics: IPhonetic[];
  meanings: IPartOfSpeech[];
  license: ILicense;
  sourceUrls: string[];
}





export type { TFont, IText, ICommonProps, ISearchFieldProps, IWord };
export { EFonts };
