import styled from "styled-components"

const Button = styled.div`
  padding-top: 1px;
  padding-right: 24px;
  padding-left: 24px;
  background-color: ${({ type = "primary", theme }) => theme.colors[type]};
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  height: 3rem;
  width: 10rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all;
  &:hover {
    background-color: ${({ type = "primary", theme }) =>
      theme.colors.darkPrimary};
  }
`

export default Button
