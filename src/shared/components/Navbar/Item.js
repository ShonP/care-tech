import styled, { css } from "styled-components"

const selectedCss = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
`

const Item = styled.div`
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ inverse, theme }) =>
    inverse ? theme.colors.white : theme.colors.black};
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  height: ${({ theme }) => theme.sizes.navbar};
  &:hover {
    ${selectedCss}
  }
  ${({ isSelected }) => isSelected && selectedCss}
`
export default Item
