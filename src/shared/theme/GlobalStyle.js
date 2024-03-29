import { createGlobalStyle, css } from "styled-components"
import { media } from "./media"

const defaultStyles = css`
  margin: 0px;
  font-family: "Barlow", "Helvetica", sans-serif;
  font-size: 8px;

  ${media.minSmallTablet`
    font-size: 12px;
  `}
  ${media.minSmallDesktop`
    font-size: 16px;
  `}
`

const globalStyles = css`
  * {
    min-height: 0;
    box-sizing: border-box;
    outline: none;
    position: relative;
    :focus {
      outline: none;
    }
  }

  html {
    overflow-y: scroll;
    ${defaultStyles}
  }

  html,
  body {
    direction: ltr;
    width: 100%;
    display: flex;
    background: ${({ theme }) => theme.colors.bodyBg};
    ${defaultStyles};
  }

  input,
  textarea,
  select,
  button {
    font-weight: normal;
    line-height: normal;
    ${defaultStyles};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: bold;
    line-height: 1;
    ${defaultStyles}
  }

  a {
    text-decoration: none;
    &:active {
      text-decoration: none;
      color: white;
    }
  }

  p {
    margin: 0;
  }
  [role="button"] {
    cursor: pointer;
  }
`

const GlobalStyle = createGlobalStyle`
    ${globalStyles}
`

export default GlobalStyle
