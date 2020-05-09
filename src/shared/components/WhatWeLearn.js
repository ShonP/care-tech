import React from "react"
import styled from "styled-components"
import MiniCard from "../../shared/components/MiniCard"
import { useTranslation } from "react-i18next"
import _Section from "../../shared/components/Section"
import Header from '../../shared/components/Header';

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
    <Section name={t("whatWeLearn")}>
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
