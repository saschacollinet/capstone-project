import GlobalStyles from "../src/GlobalStyles"
import { theme } from '../src/theme'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from "react-router";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <MemoryRouter>
     <GlobalStyles />
     <ThemeProvider theme={theme}>
     <Story />
     </ThemeProvider>
    </MemoryRouter>
  )
]