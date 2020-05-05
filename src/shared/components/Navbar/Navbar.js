import React from "react"
import styled, { css } from "styled-components"
import { useTranslation } from "react-i18next"
import Item from "./Item"
import LanguagePicker from "./LanguagePicker"
import useScroll from "../../hooks/useScroll"

const scrolledCss = css`
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
`

const Wrapper = styled.div`
  position: fixed;
  height: ${({ theme }) => theme.sizes.navbar};
  padding-left: ${({ theme }) => theme.sizes.siteSpace};
  padding-right: ${({ theme }) => theme.sizes.siteSpace};
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 2;
  transition: all 0.3s;
  ${({ isScrolled }) => isScrolled && scrolledCss};
`

const Navbar = () => {
  const { t } = useTranslation()
  const { y } = useScroll()
  return (
    <Wrapper isScrolled={y > 0}>
      <LanguagePicker />
      <Item>{t("whoWeAre")}</Item>
    </Wrapper>
  )
}

export default Navbar
