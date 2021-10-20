import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
}
`

export default GlobalStyles
