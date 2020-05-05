import React from "react"
import styled from "styled-components"
import Item from "./Item"

const Wrapper = styled.div`
  display: ${({ isMenu }) => (isMenu ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  z-index: 2;
  box-shadow: 0 8px 6px -6px black;
`

const Menu = ({ items, onChange, isMenu, value }) =>
  console.log(isMenu) || (
    <Wrapper isMenu={isMenu}>
      {items.map((item, idx) => (
        <Item
          key={idx}
          isSelected={item === value}
          onClick={() => onChange(item)}
        >
          {item.label}
        </Item>
      ))}
    </Wrapper>
  )

export default Menu
