import styled from "styled-components"
import { Element } from "react-scroll"

const Section = styled(Element)`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: ${({ theme }) => theme.sizes.siteSpace};
  flex-wrap: nowrap;
`

export default Section
