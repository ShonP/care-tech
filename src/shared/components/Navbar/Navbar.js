import React, { useState } from "react"
import { Link } from "react-scroll"
import styled, { css } from "styled-components"
import { useTranslation } from "react-i18next"
import Item from "./Item"
import LanguagePicker from "./LanguagePicker"
import useScroll from "../../hooks/useScroll"

const scrolledCss = css`
  background-color: ${({ theme }) => theme.colors.primary};
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
  z-index: 3;
  transition: all 0.3s;
  ${({ isScrolled }) => isScrolled && scrolledCss};
`

const ItemsWrapper = styled.div`
  display: flex;
  flex: 1;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  color: ${({ inverse, theme }) =>
    inverse ? theme.colors.white : theme.colors.black};
  cursor: pointer;
  transition: all 0.3s;
`

const Navbar = () => {
  const { t } = useTranslation()
  const { y } = useScroll()
  const [activeLink, setActiveLink] = useState()
  const items = [
    t("whatWeDo"),
    t("whatWeLearn"),
    t("howItWorks"),
    t("price"),
    t("talkWithUs"),
  ]
  return (
    <Wrapper isScrolled={y > 0}>
      <ItemsWrapper>
        <LanguagePicker inverse={y > 0} />
        {items.map(item => (
          <Link
            key={item}
            to={item}
            duration={500}
            onSetActive={() => setActiveLink(item)}
            spy
            smooth
            onSetInactive={() => setActiveLink(null)}
          >
            <Item isSelected={activeLink === item} inverse={y > 0}>
              {item}
            </Item>
          </Link>
        ))}
      </ItemsWrapper>
      <Logo inverse={y > 0}>{`TECH-CARE </>`}</Logo>
    </Wrapper>
  )
}

export default Navbar
