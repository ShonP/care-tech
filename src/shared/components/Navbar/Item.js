import styled, { css } from "styled-components"

const selectedCss = css`
  background-color: ${({ theme }) => theme.colors.primary};
`

const Item = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  cursor: pointer;
  position: relative;
  height: 60px;

  &:hover {
    ${selectedCss}
  }
  ${({ isSelected }) => isSelected && selectedCss}
`
export default Item
