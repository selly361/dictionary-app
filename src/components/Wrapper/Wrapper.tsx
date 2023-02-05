import { EFonts, TFont } from "types";
import React, { Fragment, useState } from "react";

import { Main } from "components";
import { ThemeProvider } from "styled-components";
import themeStylesData from "global/themeStyles";
import { useTheme } from "hooks/useTheme";

function Wrapper() {
  const { theme, setTheme } = useTheme();

  const [themeStyles, setThemeStyles] = useState(themeStylesData);


  const props = {
    theme,
    setTheme,
    setThemeStyles,
    themeStyles
  }


  
  return (
    <Fragment>
      <ThemeProvider
        theme={theme == "dark" ? themeStyles.dark : themeStyles.light}
      >
        <Main {...props} />
      </ThemeProvider>
    </Fragment>
  );
}

export default Wrapper;
