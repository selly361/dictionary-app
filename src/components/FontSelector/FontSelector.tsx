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
import { useDebounce } from "hooks/useDebounce";

function FontSelector({ themeStyles, setThemeStyles }: ICommonProps) {
  const [currentFont, setCurrentFont] = useState<TFont>("Sans Serif");
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);


  const debouncedSetOpen = useDebounce(() => setOpen(e => !e), 500)



  function changeFont(font: TFont) {
    const newThemeStyles = { ...themeStyles };

    newThemeStyles.dark.font = EFonts[font];
    newThemeStyles.light.font = EFonts[font];

    setThemeStyles(newThemeStyles);
    setOpen(false);
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
      <StyledButton
        className={open ? "active" : ""}
        onClick={debouncedSetOpen}
      >
        {currentFont}

        <ArrowIcon />
      </StyledButton>

      <AnimatePresence>
        {open && (
          <DropDown
            variants={fade_in_out}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
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
