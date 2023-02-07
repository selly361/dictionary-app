import { Emoji, Message, StyledErrorMessage, Title } from "./styles";

import React from "react";

function ErrorMessage() {
  return (
    <StyledErrorMessage>
      <Emoji>😕</Emoji>
      <Title>No Definitions Found</Title>
      <Message>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at a later time.
      </Message>
    </StyledErrorMessage>
  );
}

export default ErrorMessage;
