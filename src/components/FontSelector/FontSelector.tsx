import {
  Container,
  DropDown,
  Mono,
  SansSerif,
  Serif,
  StyledButton,
} from "./styles";
import { EFonts, TFont } from "types";
import React, { useEffect, useRef, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { ArrowIcon } from "assets";
import { ICommonProps } from "types";
import { fade_in_out } from "global/animation";

function FontSelector({ themeStyles, setThemeStyles }: ICommonProps) {
  const [currentFont, setCurrentFont] = useState<TFont>("Sans Serif");
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    const newThemeStyles = themeStyles;

    newThemeStyles.dark.font = EFonts[currentFont];
    newThemeStyles.light.font = EFonts[currentFont];


    setThemeStyles(newThemeStyles);
    setOpen(false);

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
      <StyledButton className={open ? "open" : ''} onClick={() => setOpen((e) => !e)}>
        {currentFont}

        <ArrowIcon />
      </StyledButton>

      <AnimatePresence>
        {open && (
          <DropDown variants={fade_in_out} initial="hidden" animate="visible" exit="exit" >
            <SansSerif onClick={() => setCurrentFont("Sans Serif")}>
              Sans Serif
            </SansSerif>
            <Serif onClick={() => setCurrentFont("Serif")}>Serif</Serif>
            <Mono onClick={() => setCurrentFont("Mono")}>Mono</Mono>
          </DropDown>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default FontSelector;
