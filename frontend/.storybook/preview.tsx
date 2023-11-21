import { CssBaseline, ThemeProvider } from '@mui/material'
import type { Preview } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import theme from '../src/theme/index'
import '../src/index.css'

const withThemeProvider = (Story, context) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </MemoryRouter>
  )
}
export const decorators = [withThemeProvider]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
