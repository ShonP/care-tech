import React from "react"
import styled from "styled-components"
import enginnerImage from "../../images/enginner.svg"
import { useTranslation } from "react-i18next"
import Button from "../../shared/components/Button"
import Background from "../../shared/components/Background"
import Section from "./Section"
import { media } from "../../shared/theme/media"
import { Link } from "react-scroll"

const Wrapper = styled(Section)`
  display: flex;
  background-color: white;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  flex: 1.5;
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
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};

  font-size: 1.4rem;
  line-height: 1.5rem;
  ${media.minTablet`
    font-size: 3.5rem;
    line-height: 3rem;
  `}
`

const SubHeader = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 3rem;
  font-size: 0.6rem;
  ${media.minTablet`
    font-size: 1rem;
    line-height: 3rem;
  `}
`

const Image = styled.img.attrs(() => ({ src: enginnerImage }))`
  max-width: 100%;
  max-height: 100%;
`

const Hero = () => {
  const { t } = useTranslation()
  return (
    <Wrapper name={t("header")}>
      <Background />
      <Content>
        <Header>{t("header")}</Header>
        <SubHeader>{t("subHeader")}</SubHeader>
        <Link smooth to={t("whatWeDo")}>
          <Button isRound>{t("startHere")}</Button>
        </Link>
      </Content>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
    </Wrapper>
  )
}

export default Hero
