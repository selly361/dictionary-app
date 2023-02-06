import type { EFonts, IText } from 'types';

// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
        body: string;
        text: IText;
        purple: string;
        font: EFonts;
        dropDownShadow: string;
        dropDownBg: string;
        themeButtonBg: string;
  }
}

