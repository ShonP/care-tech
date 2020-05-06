import React from "react"
import styled from "styled-components"
import MiniCard from "./MiniCard"
import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: ${({ theme }) => theme.sizes.siteSpace};
  flex-wrap: nowrap;
`

const Image = styled.img.attrs(() => ({
  src: "https://blog.hubspot.com/hubfs/landing-page-design-examples.jpg",
}))`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 30rem;
`

const cards = ["react", "css", "js", "nodejs", "html", "express"]

const CardsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  min-width: 368px;
`

const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;
`

const Header = styled.h1`
  margin-bottom: 20px;
  font-size: 2.2rem;
`

const FirstParagraph = styled.p`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 1.2rem;
`

const SecondParagraph = styled.p`
  font-size: 1rem;
`
const Section = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <CardsWrapper>
        {cards.map(i => (
          <MiniCard key={i} type={i} />
        ))}
      </CardsWrapper>
      <Content>
        <Header>{t("whoWeAre")}</Header>
        <FirstParagraph>{t("whoWeAreFirstParagraph")}</FirstParagraph>
        <SecondParagraph>{t("whoWeAreSecondParagraph")}</SecondParagraph>
      </Content>
      <Image></Image>
    </Wrapper>
  )
}

export default Section
