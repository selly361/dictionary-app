import { Divider, Heading, MiddleSection, StyledArticle, StyledPhonetic, StyledPlayButton, SubHeading, SubHeadingContainer, TitleContainer, TopSection } from './styles'

import { IWord } from 'types'
import { PlayIcon } from 'assets'
import React from 'react'

function Article({ data }: { data: IWord | null }) {
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
        <MiddleSection>
          <SubHeadingContainer>
            <SubHeading>noun</SubHeading>
            <Divider />
          </SubHeadingContainer>
        </MiddleSection>
    </StyledArticle>
  )
}

export default Article