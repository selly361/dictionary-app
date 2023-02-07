import { EFonts } from "types";

const themeStyles = {
  light: {
    /* Body Background Color */

    body: "#FFFFFF",

    /* Text */

    text: {
      primary: "#2D2D2D",
      secondary: "#757575",
    },

    /* Shared */

    purple: "#A445ED",

    /* Fonts */

    font: EFonts["Sans Serif"],

    /* Font Selector DropDown */

    dropDownShadow: "0px 5px 30px rgba(0, 0, 0, 0.1);",
    dropDownBg: "#FFFFFF",

    /* Theme Button */
    themeButtonBg: "#757575",

    /* SearchField Background */

    inputBg: "#F4F4F4",

    /* Article Divider */

    articleDivider: "#E9E9E9",
  },

  dark: {
    /* Body Background Color */

    body: "#050505",

    /* Text */

    text: {
      primary: "#FFFFFF",
      secondary: "#757575",
    },

    /* Shared */

    purple: "#A445ED",

    /* Fonts */

    font: EFonts["Sans Serif"],

    /* Font Selector DropDown */

    dropDownShadow: "0px 5px 30px #A445ED;",
    dropDownBg: "#1F1F1F",

    /* Theme Button */
    themeButtonBg: "#A445ED",

    /* SearchField Background */

    inputBg: "#1F1F1F",

    /* Article Divider */

    articleDivider: "#3A3A3A",
  },
};

export default themeStyles;
