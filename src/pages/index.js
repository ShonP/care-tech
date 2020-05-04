import React from "react"
import { ThemeProvider, StyleSheetManager } from "styled-components"
import stylisRTLPlugin from "stylis-plugin-rtl"
import theme from "../shared/theme"
import GlobalStyle from "../shared/theme/GlobalStyle"
import Navbar from "../shared/components/Navbar"
import '../shared/services/i18n';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <StyleSheetManager stylisPlugins={[stylisRTLPlugin]}>
      <div>
        <Navbar />
        <GlobalStyle />
      </div>
    </StyleSheetManager>
  </ThemeProvider>
)

export default IndexPage
