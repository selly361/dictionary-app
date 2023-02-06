import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus,
  *:active {
    -webkit-tap-highlight-color: transparent;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.font};

  }

  h1 {
    color: white;
  }

  body {
    font-style: normal;
    width: 100vw;
    height: 100vh;
    font-weight: 700;
    background-color: ${(props) => props.theme.body};
    padding-top: 58px;
  }

  

  
  input,
  button {
    outline: none;
  }
  a {
    text-decoration: none;
  }
  button,
  svg {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input,
  fieldset,
  button {
    border: unset;
    outline: unset;
  }



  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
