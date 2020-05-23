import React, { useMemo } from "react"
import _Card from "../../shared/components/Card"
import styled from "styled-components"
import { media } from "../../shared/theme/media"
import { useTranslation } from "react-i18next"
import education from "../../images/education.svg"
import communication from "../../images/communication.svg"
import job from "../../images/job.svg"
import Section from "../../shared/components/Section"
import Header from "../../shared/components/Header"

const Card = styled(_Card)`
  height: 30rem;
  width: 20rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0rem;
  }
  ${media.minTablet`
    margin-right: 3rem;

    &:last-child {
      margin-left: 0;
      margin-bottom: 3rem;
    }

  `}
`

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
`

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.minTablet`
    flex-direction:row;
  `}
`

const Img = styled.img`
  min-height: 13rem;
  max-height: 13rem;
  margin-bottom: 2rem;
`

const CardHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2rem;
`

const SubHeader = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
`

const WhatWeDo = () => {
  const { t } = useTranslation()

  const cards = useMemo(
    () => [
      { src: job, header: t("findJob"), subHeader: t("jobTips") },
      { src: education, header: t("education"), subHeader: t("educationTips") },
      {
        src: communication,
        header: t("communication"),
        subHeader: t("communicationTips"),
      },
    ],
    [t]
  )
  return (
    <Wrapper name={t("whatWeDo")}>
      <Header isCenter>{t("whatWeDo")}</Header>
      <Cards>
        {cards.map(({ src, header, subHeader }) => (
          <Card key={header}>
            <Img src={src}></Img>
            <CardHeader>{header}</CardHeader>
            <SubHeader>{subHeader}</SubHeader>
          </Card>
        ))}
      </Cards>
    </Wrapper>
  )
}

export default WhatWeDo
