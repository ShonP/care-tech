import React from "react"
import styled from "styled-components"
import enginnerImage from "../../images/enginner.svg"
import { useTranslation } from "react-i18next"
import Button from "../../shared/components/Button"
import Background from "../../shared/components/Background"
import Section from "./Section"

const Wrapper = styled(Section)`
  display: flex;
  background-color: white;
  overflow: hidden;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  z-index: 2;
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
  color: ${({ theme }) => theme.colors.black};
  line-height: 3rem;
`

const SubHeader = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1rem;
  line-height: 3rem;
`

const Image = styled.img.attrs(() => ({ src: enginnerImage }))`
  flex: 1.5;
`

const Hero = () => {
  const { t } = useTranslation()
  return (
    <Wrapper name={t("header")}>
      <Background />
      <Content>
        <Header>{t("header")}</Header>
        <SubHeader>{t("subHeader")}</SubHeader>
        <Button isRound>{t("startHere")}</Button>
      </Content>
      <Image />
    </Wrapper>
  )
}

export default Hero
