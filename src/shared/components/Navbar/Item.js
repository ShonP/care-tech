import styled, { css } from "styled-components"

const selectedCss = css`
  background-color: ${({ theme }) => theme.colors.primary};
`

const Item = styled.div`
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  position: relative;
  height: ${({ theme }) => theme.sizes.navbar};

  &:hover {
    ${selectedCss}
  }
  ${({ isSelected }) => isSelected && selectedCss}
`
export default Item
