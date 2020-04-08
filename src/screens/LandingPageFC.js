import React from 'react'
import '../App.css'
import { ThemeContext } from '../AppContext'

const LandingPageFC = (props) => {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  const contextType = ThemeContext
  console.log('contextType from a function component', contextType)
  return (
    <div className="App">
      <h1>Hi, This is the Landing Page</h1>

      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}
          >
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}

export default LandingPageFC
