import React, { useState, useMemo, useCallback } from "react"
import _Item from "./Item"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"
import { faLanguage, faGlobe } from "@fortawesome/free-solid-svg-icons"
import Menu from "./Menu"

const Icon = styled(FontAwesomeIcon)`
  &&& {
    width: 30px;
    height: 30px;
  }
  &:first-child {
    margin-right: 6px;
  }
`

const Item = styled(_Item)`
  background-color: ${({ theme, isMenu }) => isMenu && theme.colors.primary};
`

const LanguagePicker = () => {
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
  ])
  const onChange = useCallback(val => {
    i18n.changeLanguage(val.value)
  }, [])
  return (
    <Item isMenu={isMenu} onClick={() => setIsMenu(e => !e)}>
      <Icon icon={faLanguage} />
      <Icon icon={faGlobe} />
      {isMenu && <Menu items={items} value={value} onChange={onChange}></Menu>}
    </Item>
  )
}

export default LanguagePicker
