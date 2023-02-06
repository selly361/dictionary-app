import { Container, DropDown, Mono, SansSerif, Serif, StyledButton } from "./styles";
import { EFonts, TFont } from "types";
import React, { useEffect, useRef, useState } from "react";

import { ArrowIcon } from "assets";
import { ICommonProps } from "types";

function FontSelector({ themeStyles, setThemeStyles }: ICommonProps) {
  const [currentFont, setCurrentFont] = useState<TFont>("Sans Serif");
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  function changeFont(font: TFont) {
    const newThemeStyles = {...themeStyles};

    newThemeStyles.dark.font = EFonts[font];
    newThemeStyles.light.font = EFonts[font];


    setThemeStyles(newThemeStyles);
    setOpen(false)
  }

  useEffect(() => {
    changeFont(currentFont);
  }, [currentFont]);
  

  function handleClickOutside(event: any) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <Container ref={modalRef}>
      <StyledButton onClick={() => setOpen(e => !e)}>
        {currentFont}

        <ArrowIcon />
      </StyledButton>

      {open && (
        <DropDown>
          <SansSerif onClick={() => setCurrentFont("Sans Serif")}>Sans Serif</SansSerif>
          <Serif onClick={() => setCurrentFont("Serif")}>Serif</Serif>
          <Mono onClick={() => setCurrentFont("Mono")}>Mono</Mono>
        </DropDown>
      )}
    </Container>
  );
}

export default FontSelector;
