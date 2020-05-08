import React, { useEffect, useState } from "react"
import { ThemeProvider, StyleSheetManager } from "styled-components"
import stylisRTLPlugin from "stylis-plugin-rtl"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import Navbar from "../shared/components/Navbar"
import theme from "../shared/theme"
import GlobalStyle from "../shared/theme/GlobalStyle"
import Hero from "../shared/components/Hero"
import AboutUs from "../shared/components/AboutUs"
import Pricing from "../shared/components/Pricing"
import WhatWeDo from "../shared/components/WhatWeDo"
import "../shared/services/i18n"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`

const rtlPlugin = [stylisRTLPlugin]

const emptyArray = []

const IndexPage = () => {
  const { i18n } = useTranslation()
  const [stylisPlugins, setStylisPlugins] = useState(emptyArray)
  useEffect(() => {
    setStylisPlugins(i18n.dir(i18n.language) === "rtl" ? rtlPlugin : emptyArray)
    i18n.on("languageChanged", l => {
      setStylisPlugins(i18n.dir(l) === "rtl" ? rtlPlugin : emptyArray)
    })
  }, [i18n])
  return (
    <StyleSheetManager stylisPlugins={stylisPlugins}>
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
          <GlobalStyle />
          <Hero></Hero>
          <WhatWeDo />
          <AboutUs />
          <Pricing />
        </Container>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default IndexPage
