import React from 'react'
import { themes } from './theme/theme'

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
// export const ThemeContext = React.createContext('light')
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})
