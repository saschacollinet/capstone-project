import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  height: 100%;
  overflow-x: hidden;
}

body {
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  overflow-x: hidden;
}
`

export default GlobalStyles
