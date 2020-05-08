import React, { useMemo } from "react"
import _Card from "./Card"
import styled from "styled-components"
import education from "../../images/education.svg"
import communication from "../../images/communication.svg"
import job from "../../images/job.svg"
import { useTranslation } from "react-i18next"

const Card = styled(_Card)`
  height: 30rem;
  width: 20rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  margin-right: 3rem;
  &:last-child {
    margin-left: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: ${({ theme }) => theme.sizes.siteSpace};
  margin-top: ${({ theme }) => theme.sizes.siteSpace};
`

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  min-height: 13rem;
  max-height: 13rem;
  margin-bottom: 2rem;
`

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  &::after {
    content: ""; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 15%; /* Change this to whatever width you want. */
    padding-top: 20px; /* This creates some space between the element and the border. */
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary}; /* This creates the border. Replace black with whatever color you want. */
  }
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
    <Wrapper>
      <Header>{t("whatWeDo")}</Header>
      <Cards>
        {cards.map(({ src, header, subHeader }) => (
          <Card>
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
