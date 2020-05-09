import React, { useState, useRef, useMemo, useCallback } from "react"
import _Item from "./Item"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"
import { faLanguage, faGlobe } from "@fortawesome/free-solid-svg-icons"
import useClickoutside from "../../hooks/useClickoutside"
import Menu from "./Menu"

const Icon = styled(FontAwesomeIcon)`
  &&& {
    width: 2rem;
    height: 2rem;
  }
  &:first-child {
    margin-right: 0.4rem;
  }
`

const Item = styled(_Item)`
  background-color: ${({ theme, isMenu }) => isMenu && theme.colors.primary};
  color: ${({ theme, isMenu }) => isMenu && theme.colors.white};
`

const LanguagePicker = props => {
  const [isMenu, setIsMenu] = useState(false)
  const { t, i18n } = useTranslation()
  const items = useMemo(
    () => [
      { value: "he-IL", label: t("he-IL") },
      { value: "en", label: t("en") },
    ],
    [t]
  )
  const value = useMemo(() => items.find(v => v.value === i18n.language), [
    items,
    i18n.language,
  ])

  const closeMenu = useCallback(() => setIsMenu(false), [setIsMenu])

  const onChange = useCallback(
    val => {
      i18n.changeLanguage(val.value).then(() => {
        closeMenu()
      })
    },
    [i18n, closeMenu]
  )
  const itemRef = useRef()

  useClickoutside(itemRef, closeMenu)

  return (
    <Item
      ref={itemRef}
      isMenu={isMenu}
      onClick={() => setIsMenu(e => !e)}
      {...props}
    >
      <Icon icon={faLanguage} />
      <Icon icon={faGlobe} />
      <Menu isMenu={isMenu} items={items} value={value} onChange={onChange} />
    </Item>
  )
}

export default LanguagePicker
