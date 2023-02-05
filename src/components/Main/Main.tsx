import { ICommonProps, TFont } from "types";
import React, { Fragment } from "react";

import { GlobalStyles } from "global/styles";
import { Header } from "components";

function Main(props: ICommonProps) {
  return (
    <Fragment>
      <GlobalStyles />
      <Header {...props} />
    </Fragment>
  );
}

export default Main;
