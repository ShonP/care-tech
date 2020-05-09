import styled from "styled-components"

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  &::after {
    content: ""; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 15%; /* Change this to whatever width you want. */
    padding-top: 20px; /* This creates some space between the element and the border. */
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary}; /* This creates the border. Replace black with whatever color you want. */
  }
`

export default Header
