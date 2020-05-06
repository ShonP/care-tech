import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import _Section from "./Section"
import _Card from "./Card"

const Section = styled(_Section)`
  padding-top: 20rem;
`
const Card = styled(_Card)`
  flex: 1;
  margin-right: 3rem;
  &:last-child {
    margin-right: 0;
  }
`
const Pricing = () => {
  const { t } = useTranslation()
  const plans = [
    {
      price: `250₪`,
      title: "Front End",
      priceInfo:`/ ${t("month")}`,
      items: ["HTML", "CSS", "JS", "React"],
      type: "front",
    },

    {
      price: `300₪`,
      discount: `50% ${t("discount")}`,
      title: "Full Stack",
      priceInfo:`/ ${t("month")}`,
      items: [
        "HTML",
        "CSS",
        "JS",
        "React",
        "NodeJS",
        "Express",
        "JS",
        "MongoDB",
      ],
      type: "full",
    },
    {
      price: `350₪`,
      title: "Back End",
      priceInfo:`/ ${t("month")}`,
      items: ["NodeJS", "Express", "JS", "MongoDB"],
      type: "back",
    },
  ]
  return (
    <Section>
      {plans.map((plan, idx) => (
        <Card key={idx} plan={plan} />
      ))}
    </Section>
  )
}

export default Pricing
