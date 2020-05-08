import React from "react"
import styled from "styled-components"
import enginnerImage from "../../images/enginner.svg"
import Button from "./Button"
import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  display: flex;
  padding-left: ${({ theme }) => theme.sizes.siteSpace};
  padding-right: ${({ theme }) => theme.sizes.siteSpace};
  margin-top: ${({ theme }) => theme.sizes.navbar};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
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
    <Wrapper>
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
