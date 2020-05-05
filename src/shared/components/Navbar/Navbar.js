import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import Item from "./Item"
import LanguagePicker from "./LanguagePicker"

const Wrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
`

const Navbar = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <LanguagePicker />
      <Item>{t("whoWeAre")}</Item>
    </Wrapper>
  )
}

export default Navbar
