import React from "react"
import styled from "styled-components"
import MiniCard from "./MiniCard"
import { useTranslation } from "react-i18next"
import _Section from "./Section"

const Section = styled(_Section)`
  background-color: white;
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
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.25rem;
  &::after {
    content: ""; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    width: 25%; /* Change this to whatever width you want. */
    padding-top: 20px; /* This creates some space between the element and the border. */
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary}; /* This creates the border. Replace black with whatever color you want. */
  }
`

const FirstParagraph = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 1.2rem;
`

const SecondParagraph = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1rem;
`
const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <Section>
      <CardsWrapper>
        {cards.map(i => (
          <MiniCard key={i} type={i} />
        ))}
      </CardsWrapper>
      <Content>
        <Header>{t("whatWeLearn")}</Header>
        <FirstParagraph>{t("whatWeLearnFirstParagraph")}</FirstParagraph>
        <SecondParagraph>{t("whatWeLearnSecondParagraph")}</SecondParagraph>
      </Content>
    </Section>
  )
}

export default AboutUs
