import React from "react"
import styled from "styled-components"
import { Element } from "react-scroll"

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: ${({ theme }) => theme.sizes.siteSpace};
  flex-wrap: nowrap;
`

const Section = ({ name, ...rest }) => (
  <Element name={name}>
    <Wrapper {...rest} />
  </Element>
)

export default Section
