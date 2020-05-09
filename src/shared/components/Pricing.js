import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import _Section from "./Section"
import _PricingCard from "./PricingCard"

const Section = styled(_Section)`
  padding-top: 20rem;
`
const PricingCard = styled(_PricingCard)`
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
      title: "צד לקוח",
      priceInfo: `/ ${t("month")}`,
      items: [
        "השגת קשרים והצעות העבודה",
        "יחס אישי והתחברות לקהילה",
        "קורסים המיועדים לפיתוח צד לקוח",
        "הכנה למבחנים",
      ],
      type: "front",
    },

    {
      price: `300₪`,
      discount: `50% ${t("discount")}`,
      title: "פול סטאק",
      priceInfo: `/ ${t("month")}`,
      items: [
        "השגת קשרים והצעות העבודה",
        "יחס אישי והתחברות לקהילה",
        "קורסים המיועדים לפיתוח צד שרת",
        "קורסים המיועדים לפיתוח צד לקוח",
        "הכנה למבחנים",
      ],
      type: "full",
    },
    {
      price: `350₪`,
      title: "מובייל",
      priceInfo: `/ ${t("month")}`,
      items: [
        "השגת קשרים והצעות העבודה",
        "יחס אישי והתחברות לקהילה",
        "קורסים המיועדים לפיתוח מובייל",
        "הכנה למבחנים",
      ],
      type: "back",
    },
  ]
  return (
    <Section>
      {plans.map((plan, idx) => (
        <PricingCard key={idx} plan={plan} />
      ))}
    </Section>
  )
}

export default Pricing
