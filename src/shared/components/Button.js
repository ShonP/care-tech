import styled from "styled-components"

const Button = styled.div`
  padding-top: 1px;
  padding-right: 24px;
  padding-left: 24px;
  background-color: ${({ type = "primary", theme, disabled }) =>
    disabled ? "gray" : theme.colors[type]};
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
  border-radius: ${({ isRound }) => isRound && "50px"};
  white-space: nowrap;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.7);
  &:hover {
    background-color: ${({ type = "primary", theme }) =>
      theme.colors.darkPrimary};
  }
`

export default Button
