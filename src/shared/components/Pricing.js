import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import _Section from "../../shared/components/Section"
import _PricingCard from "../../shared/components/PricingCard"
import _Header from "../../shared/components/Header"
import { media } from "../../shared/theme/media"

const Header = styled(_Header)`
  margin-bottom: 4rem;
`
const Section = styled(_Section)`
  flex-direction: column;
  padding-bottom: 6rem;
`

const PricingCard = styled(_PricingCard)`
  flex: 1;
  width: calc(100% - 10rem);
  margin-bottom: 5rem;
  ${media.minTablet`
    width:20rem;
    margin-right: 3rem;

    &:last-child {
      margin-right: 0;
    }
  `}

  &:last-child {
    margin-bottom: 0;
  }
`

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.minTablet`
    align-items: flex-start;
    flex-direction:row;
  `}
`

const Pricing = ({onClick}) => {
  const { t } = useTranslation()
  const plans = [
    {
      price: `990₪`,
      title: "צד לקוח",
      priceInfo: `/ ${t("4meet")}`,
      items: [
        "השגת קשרים והצעות העבודה",
        "יחס אישי והתחברות לקהילה",
        "קורסים המיועדים לפיתוח צד לקוח",
        "הכנה למבחנים",
      ],
      type: "front",
    },

    {
      price: `1190₪`,
      discount: `50% ${t("discount")}`,
      title: "פול סטאק",
      priceInfo: `/ ${t("6meet")}`,
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
      price: `1590₪`,
      title: "מובייל",
      priceInfo: `/ ${t("7meet")}`,
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
      <Header isCenter>{t("price")}</Header>
      <CardsWrapper>
        {plans.map((plan, idx) => (
          <PricingCard key={idx} onClick={onClick} plan={plan} />
        ))}
      </CardsWrapper>
    </Section>
  )
}

export default Pricing
