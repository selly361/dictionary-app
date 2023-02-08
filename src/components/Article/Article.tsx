import {
  BottomContainer,
  BottomDivider,
  BulletPoint,
  Divider,
  ExampleText,
  Heading,
  ListContainer,
  ListItem,
  ListItemContainer,
  MiddleSection,
  SecondarySubHeading,
  SourceContent,
  SourceLabel,
  StyledArticle,
  StyledPhonetic,
  StyledPlayButton,
  SubHeading,
  SubHeadingContainer,
  ThesaurusContainer,
  ThesaurusWord,
  TitleContainer,
  TopSection,
  Wrapper,
} from "./styles";
import { IArticleProps, IWord } from "types";
import { NewWindowsIcon, PlayIcon } from "assets";
import React, { Fragment } from "react";

import { uniqueId } from "utils/unqiueId";

function Article({ data, handleClick }: IArticleProps) {
  return (
    <StyledArticle>
      <TopSection>
        <TitleContainer>
          <Heading>{data?.word}</Heading>
          <StyledPhonetic>{data?.phonetic}</StyledPhonetic>
        </TitleContainer>

        <StyledPlayButton>
          <PlayIcon />
        </StyledPlayButton>
      </TopSection>
      {data &&
        data.meanings.map((meaning) => (
          <Fragment key={uniqueId()}>
            <MiddleSection>
              <SubHeadingContainer>
                <SubHeading>{meaning.partOfSpeech}</SubHeading>
                <Divider />
              </SubHeadingContainer>
              <SecondarySubHeading>Meaning</SecondarySubHeading>
              <ListContainer>
                {meaning.definitions.map((def) => (
                  <Wrapper key={uniqueId()}>
                    <ListItemContainer>
                      <BulletPoint />
                      <ListItem>{def.definition}</ListItem>
                    </ListItemContainer>
                    {def.example && <ExampleText>"{def.example}"</ExampleText>}
                  </Wrapper>
                ))}
              </ListContainer>
              {meaning.synonyms.length ? (
                <>
                  <SecondarySubHeading>Synonyms: </SecondarySubHeading>

                  <ThesaurusContainer>
                    {Array.from(new Set(meaning.synonyms)).map((synonym) => (
                      <ThesaurusWord
                        key={uniqueId()}
                        onClick={() => handleClick(synonym)}
                      >
                        {synonym}
                      </ThesaurusWord>
                    ))}
                  </ThesaurusContainer>
                </>
              ) : null}
              <br />
              <br />
              {meaning.antonyms.length ? (
                <>
                  <SecondarySubHeading>Antonyms: </SecondarySubHeading>

                  <ThesaurusContainer>
                    {Array.from(new Set(meaning.antonyms)).map((antonym) => (
                      <ThesaurusWord
                        key={uniqueId()}
                        onClick={() => handleClick(antonym)}
                      >
                        {antonym}
                      </ThesaurusWord>
                    ))}
                  </ThesaurusContainer>
                </>
              ) : null}
            </MiddleSection>
          </Fragment>
        ))}
      <BottomDivider />
      <BottomContainer>
        <SourceLabel>Source</SourceLabel>
        <div>
          <SourceContent
            target="_blank"
            href={`https://en.wiktionary.org/wiki/${data?.word}`}
          >
            https://en.wiktionary.org/wiki/{data?.word}
          </SourceContent>
          <NewWindowsIcon />
        </div>
      </BottomContainer>
    </StyledArticle>
  );
}

export default Article;
