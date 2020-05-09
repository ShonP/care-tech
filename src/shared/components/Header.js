import styled from "styled-components"

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: ${({ isCenter }) => isCenter && "center"};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  &::after {
    content: "";
    display: block;
    margin: ${({ isCenter }) => isCenter && "0 auto"};
    width: 15%;
    padding-top: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`

export default Header
