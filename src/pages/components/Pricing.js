import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import _Section from "../../shared/components/Section"
import _PricingCard from "../../shared/components/PricingCard"
import _Header from "../../shared/components/Header"

const Header = styled(_Header)`
  margin-bottom: 4rem;
`
const Section = styled(_Section)`
  flex-direction: column;
  padding-bottom: 6rem;
`

const PricingCard = styled(_PricingCard)`
  flex: 1;
  margin-right: 3rem;
  &:last-child {
    margin-right: 0;
  }
`

const CardsWrapper = styled.div`
  display: flex;
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
    <Section name={t("price")}>
      <Header>{t("price")}</Header>
      <CardsWrapper>
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </CardsWrapper>
    </Section>
  )
}

export default Pricing
