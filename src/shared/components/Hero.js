import React from "react"
import styled from "styled-components"
import HeroImage from "../../images/Hero.png"
import Button from "./Button"
import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  padding-left: ${({ theme }) => theme.sizes.siteSpace};
  padding-right: ${({ theme }) => theme.sizes.siteSpace};
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  & > * {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Header = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  color: white;
  line-height: 3rem;
`

const SubHeader = styled.p`
  color: white;
  font-size: 1rem;
  line-height: 3rem;
`

const Image = styled.img.attrs(() => ({ src: HeroImage }))`
  width: 100%;
`

const Hero = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Content>
        <Header>{t("header")}</Header>
        <SubHeader>{t("subHeader")}</SubHeader>
        <Button>{t("startHere")}</Button>
      </Content>
      <Image />
    </Wrapper>
  )
}

export default Hero
