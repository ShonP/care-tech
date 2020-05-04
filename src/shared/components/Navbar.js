import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
`

const Item = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`

const Navbar = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Item>{t("shon")}</Item>
    </Wrapper>
  )
}

export default Navbar
