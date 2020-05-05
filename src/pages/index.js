import React from "react"
import { ThemeProvider, StyleSheetManager } from "styled-components"
import stylisRTLPlugin from "stylis-plugin-rtl"
import theme from "../shared/theme"
import GlobalStyle from "../shared/theme/GlobalStyle"
import { useTranslation } from "react-i18next"
import Navbar from "../shared/components/Navbar"
import "../shared/services/i18n"

const rtlPlugin = [stylisRTLPlugin]
const emptyArray = []

const IndexPage = () => {
  const { i18n } = useTranslation()
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager
        stylisPlugins={i18n.language === "he-IL" ? rtlPlugin : emptyArray}
      >
        <div>
          <Navbar />
          <GlobalStyle />
        </div>
      </StyleSheetManager>
    </ThemeProvider>
  )
}

export default IndexPage
