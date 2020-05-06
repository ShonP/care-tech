import styled from "styled-components"

const Section = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: ${({ theme }) => theme.sizes.siteSpace};
  flex-wrap: nowrap;
`

export default Section
